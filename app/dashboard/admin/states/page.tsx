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
  countrycode: string;
  statecode: string;
  state: string;
  country?: string;
}

export default function StatesPage() {
  const [states, setStates] = useState<State[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredStates, setFilteredStates] = useState<State[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingState, setEditingState] = useState<State | null>(null);
  const [deletingState, setDeletingState] = useState<State | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    countrycode: '',
    statecode: '',
    state: '',
  });

  useEffect(() => {
    fetchStates();
    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = states.filter(
      (state) =>
        state.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        state.statecode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        state.country?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStates(filtered);
  }, [searchTerm, states]);

  const fetchStates = async () => {
    try {
      const response = await fetch('/api/admin/states');
      const data = await response.json();
      if (data.success) {
        setStates(data.data);
        setFilteredStates(data.data);
      }
    } catch (error) {
      console.error('Error fetching states:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch states',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = '/api/admin/states';
      const method = editingState ? 'PUT' : 'POST';
      const body = editingState
        ? { ...formData, stateid: editingState.stateid }
        : formData;

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
        fetchStates();
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
    if (!deletingState) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/api/admin/states?stateid=${deletingState.stateid}`,
        { method: 'DELETE' }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Success',
          description: data.message,
        });
        setIsDeleteDialogOpen(false);
        setDeletingState(null);
        fetchStates();
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
        description: 'Failed to delete state',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const openEditDialog = (state: State) => {
    setEditingState(state);
    setFormData({
      countrycode: state.countrycode,
      statecode: state.statecode,
      state: state.state,
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (state: State) => {
    setDeletingState(state);
    setIsDeleteDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({ countrycode: '', statecode: '', state: '' });
    setEditingState(null);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">State Management</h1>
        <Button
          onClick={() => {
            resetForm();
            setIsDialogOpen(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add State
        </Button>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search states..."
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
              <TableHead>State ID</TableHead>
              <TableHead>State Name</TableHead>
              <TableHead>State Code</TableHead>
              <TableHead>Country</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStates.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No states found
                </TableCell>
              </TableRow>
            ) : (
              filteredStates.map((state) => (
                <TableRow key={state.stateid}>
                  <TableCell>{state.stateid}</TableCell>
                  <TableCell className="font-medium">{state.state}</TableCell>
                  <TableCell>{state.statecode}</TableCell>
                  <TableCell>{state.country}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openEditDialog(state)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openDeleteDialog(state)}
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
              {editingState ? 'Edit State' : 'Add New State'}
            </DialogTitle>
            <DialogDescription>
              {editingState
                ? 'Update the state information'
                : 'Fill in the details to create a new state'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  value={formData.countrycode}
                  onValueChange={(value) =>
                    setFormData({ ...formData, countrycode: value })
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
                <Label htmlFor="statecode">State Code</Label>
                <Input
                  id="statecode"
                  value={formData.statecode}
                  onChange={(e) =>
                    setFormData({ ...formData, statecode: e.target.value })
                  }
                  maxLength={2}
                  placeholder="e.g., CA, TX"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">State Name</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  placeholder="e.g., California"
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
                {loading ? 'Saving...' : editingState ? 'Update' : 'Create'}
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
              Are you sure you want to delete the state &quot;
              {deletingState?.state}&quot;? This action cannot be undone.
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