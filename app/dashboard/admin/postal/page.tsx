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
  district: string;
  stateid: number;
}

interface Postal {
  postid: number;
  postcode: string;
  districtid: number;
  stateid: number;
  countrycode: string;
  district?: string;
  state?: string;
  country?: string;
}

export default function PostalPage() {
  const [postals, setPostals] = useState<Postal[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [filteredStates, setFilteredStates] = useState<State[]>([]);
  const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
  const [filteredPostals, setFilteredPostals] = useState<Postal[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingPostal, setEditingPostal] = useState<Postal | null>(null);
  const [deletingPostal, setDeletingPostal] = useState<Postal | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    countrycode: '',
    stateid: '',
    districtid: '',
    postcode: '',
  });

  useEffect(() => {
    fetchPostals();
    fetchCountries();
    fetchStates();
    fetchDistricts();
  }, []);

  useEffect(() => {
    const filtered = postals.filter(
      (postal) =>
        postal.postcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        postal.district?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        postal.state?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        postal.country?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPostals(filtered);
  }, [searchTerm, postals]);

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

  useEffect(() => {
    if (formData.stateid) {
      const filtered = districts.filter(
        (district) => district.stateid === parseInt(formData.stateid)
      );
      setFilteredDistricts(filtered);
    } else {
      setFilteredDistricts([]);
    }
  }, [formData.stateid, districts]);

  const fetchPostals = async () => {
    try {
      const response = await fetch('/api/admin/postal');
      const data = await response.json();
      if (data.success) {
        setPostals(data.data);
        setFilteredPostals(data.data);
      }
    } catch (error) {
      console.error('Error fetching postal codes:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch postal codes',
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

  const fetchDistricts = async () => {
    try {
      const response = await fetch('/api/admin/districts');
      const data = await response.json();
      if (data.success) {
        setDistricts(data.data);
      }
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = '/api/admin/postal';
      const method = editingPostal ? 'PUT' : 'POST';
      const body = editingPostal
        ? {
            postid: editingPostal.postid,
            postcode: formData.postcode,
            districtid: parseInt(formData.districtid),
            stateid: parseInt(formData.stateid),
            countrycode: formData.countrycode,
          }
        : {
            postcode: formData.postcode,
            districtid: parseInt(formData.districtid),
            stateid: parseInt(formData.stateid),
            countrycode: formData.countrycode,
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
        fetchPostals();
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
    if (!deletingPostal) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/api/admin/postal?postid=${deletingPostal.postid}`,
        { method: 'DELETE' }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Success',
          description: data.message,
        });
        setIsDeleteDialogOpen(false);
        setDeletingPostal(null);
        fetchPostals();
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
        description: 'Failed to delete postal code',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const openEditDialog = (postal: Postal) => {
    setEditingPostal(postal);
    setFormData({
      countrycode: postal.countrycode,
      stateid: postal.stateid.toString(),
      districtid: postal.districtid.toString(),
      postcode: postal.postcode,
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (postal: Postal) => {
    setDeletingPostal(postal);
    setIsDeleteDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      countrycode: '',
      stateid: '',
      districtid: '',
      postcode: '',
    });
    setEditingPostal(null);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Postal Code Management</h1>
        <Button
          onClick={() => {
            resetForm();
            setIsDialogOpen(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Postal Code
        </Button>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search postal codes..."
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
              <TableHead>Post ID</TableHead>
              <TableHead>Postal Code</TableHead>
              <TableHead>District</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Country</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPostals.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No postal codes found
                </TableCell>
              </TableRow>
            ) : (
              filteredPostals.map((postal) => (
                <TableRow key={postal.postid}>
                  <TableCell>{postal.postid}</TableCell>
                  <TableCell className="font-medium">
                    {postal.postcode}
                  </TableCell>
                  <TableCell>{postal.district}</TableCell>
                  <TableCell>{postal.state}</TableCell>
                  <TableCell>{postal.country}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openEditDialog(postal)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openDeleteDialog(postal)}
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
              {editingPostal ? 'Edit Postal Code' : 'Add New Postal Code'}
            </DialogTitle>
            <DialogDescription>
              {editingPostal
                ? 'Update the postal code information'
                : 'Fill in the details to create a new postal code'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  value={formData.countrycode}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      countrycode: value,
                      stateid: '',
                      districtid: '',
                    })
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
                    setFormData({ ...formData, stateid: value, districtid: '' })
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
                <Label htmlFor="district">District</Label>
                <Select
                  value={formData.districtid}
                  onValueChange={(value) =>
                    setFormData({ ...formData, districtid: value })
                  }
                  required
                  disabled={!formData.stateid}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a district" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredDistricts.map((district) => (
                      <SelectItem
                        key={district.districtid}
                        value={district.districtid.toString()}
                      >
                        {district.district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="postcode">Postal Code</Label>
                <Input
                  id="postcode"
                  value={formData.postcode}
                  onChange={(e) =>
                    setFormData({ ...formData, postcode: e.target.value })
                  }
                  placeholder="e.g., 90001"
                  required
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
                {loading ? 'Saving...' : editingPostal ? 'Update' : 'Create'}
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
              Are you sure you want to delete the postal code &quot;
              {deletingPostal?.postcode}&quot;? This action cannot be undone.
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

