'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface Country {
  countrycode: string;
  country: string;
}

interface State {
  stateid: number;
  state: string;
  countrycode: string;
}

interface District {
  districtid: number;
  stateid: number;
  district: string;
  disthhq: string | null;
  state?: string;
  country?: string;
}

export default function DistrictsPage() {
  const [districts, setDistricts] = useState<District[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [filteredStates, setFilteredStates] = useState<State[]>([]);
  const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingDistrict, setEditingDistrict] = useState<District | null>(null);
  const [deletingDistrict, setDeletingDistrict] = useState<District | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    countrycode: '',
    stateid: '',
    district: '',
    disthhq: '',
  });

  useEffect(() => {
    fetchDistricts();
    fetchCountries();
    fetchStates();
  }, []);

  useEffect(() => {
    const filtered = districts.filter(
      (district) =>
        district.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        district.disthhq?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        district.state?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        district.country?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDistricts(filtered);
  }, [searchTerm, districts]);

  useEffect(() => {
    if (formData.countrycode) {
      const filtered = states.filter(
        (state) => state.countrycode === formData.countrycode
      );
      setFilteredStates(filtered);
    } else {
      setFilteredStates([]);
    }
  }, [formData.countrycode, states]);

  const fetchDistricts = async () => {
    try {
      const response = await fetch('/api/admin/districts');
      const data = await response.json();
      if (data.success) {
        setDistricts(data.data);
        setFilteredDistricts(data.data);
      }
    } catch (error) {
      console.error('Error fetching districts:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch districts',
        variant: 'destructive',
      });
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch('/api/admin/countries');
      const data = await response.json();
      if (data.success) {
        setCountries(data.data);
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const fetchStates = async () => {
    try {
      const response = await fetch('/api/admin/states');
      const data = await response.json();
      if (data.success) {
        setStates(data.data);
      }
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = '/api/admin/districts';
      const method = editingDistrict ? 'PUT' : 'POST';
      const body = editingDistrict
        ? {
            districtid: editingDistrict.districtid,
            stateid: parseInt(formData.stateid),
            district: formData.district,
            disthhq: formData.disthhq || null,
          }
        : {
            stateid: parseInt(formData.stateid),
            district: formData.district,
            disthhq: formData.disthhq || null,
          };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Success',
          description: data.message,
        });
        setIsDialogOpen(false);
        resetForm();
        fetchDistricts();
      } else {
        toast({
          title: 'Error',
          description: data.error,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingDistrict) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/api/admin/districts?districtid=${deletingDistrict.districtid}`,
        { method: 'DELETE' }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Success',
          description: data.message,
        });
        setIsDeleteDialogOpen(false);
        setDeletingDistrict(null);
        fetchDistricts();
      } else {
        toast({
          title: 'Error',
          description: data.error,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete district',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const openEditDialog = (district: District) => {
    setEditingDistrict(district);
    // Find the state to get its countrycode
    const state = states.find((s) => s.stateid === district.stateid);
    setFormData({
      countrycode: state?.countrycode || '',
      stateid: district.stateid.toString(),
      district: district.district,
      disthhq: district.disthhq || '',
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (district: District) => {
    setDeletingDistrict(district);
    setIsDeleteDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({ countrycode: '', stateid: '', district: '', disthhq: '' });
    setEditingDistrict(null);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">District Management</h1>
        <Button
          onClick={() => {
            resetForm();
            setIsDialogOpen(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add District
        </Button>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search districts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>District ID</TableHead>
              <TableHead>District Name</TableHead>
              <TableHead>District HQ</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Country</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDistricts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No districts found
                </TableCell>
              </TableRow>
            ) : (
              filteredDistricts.map((district) => (
                <TableRow key={district.districtid}>
                  <TableCell>{district.districtid}</TableCell>
                  <TableCell className="font-medium">
                    {district.district}
                  </TableCell>
                  <TableCell>{district.disthhq || 'N/A'}</TableCell>
                  <TableCell>{district.state}</TableCell>
                  <TableCell>{district.country}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openEditDialog(district)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openDeleteDialog(district)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingDistrict ? 'Edit District' : 'Add New District'}
            </DialogTitle>
            <DialogDescription>
              {editingDistrict
                ? 'Update the district information'
                : 'Fill in the details to create a new district'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  value={formData.countrycode}
                  onValueChange={(value) =>
                    setFormData({ ...formData, countrycode: value, stateid: '' })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem
                        key={country.countrycode}
                        value={country.countrycode}
                      >
                        {country.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">State</Label>
                <Select
                  value={formData.stateid}
                  onValueChange={(value) =>
                    setFormData({ ...formData, stateid: value })
                  }
                  required
                  disabled={!formData.countrycode}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredStates.map((state) => (
                      <SelectItem
                        key={state.stateid}
                        value={state.stateid.toString()}
                      >
                        {state.state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="district">District Name</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) =>
                    setFormData({ ...formData, district: e.target.value })
                  }
                  placeholder="e.g., Los Angeles"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="disthhq">District Headquarters</Label>
                <Input
                  id="disthhq"
                  value={formData.disthhq}
                  onChange={(e) =>
                    setFormData({ ...formData, disthhq: e.target.value })
                  }
                  placeholder="e.g., Downtown LA (Optional)"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : editingDistrict ? 'Update' : 'Create'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the district &quot;
              {deletingDistrict?.district}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
