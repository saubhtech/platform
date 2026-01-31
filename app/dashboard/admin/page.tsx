'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, Building2, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Stats {
  countries: number;
  states: number;
  districts: number;
  postals: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    countries: 0,
    states: 0,
    districts: 0,
    postals: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [countriesRes, statesRes, districtsRes, postalsRes] =
        await Promise.all([
          fetch('/api/admin/countries'),
          fetch('/api/admin/states'),
          fetch('/api/admin/districts'),
          fetch('/api/admin/postal'),
        ]);

      const [countries, states, districts, postals] = await Promise.all([
        countriesRes.json(),
        statesRes.json(),
        districtsRes.json(),
        postalsRes.json(),
      ]);

      setStats({
        countries: countries.count || 0,
        states: states.count || 0,
        districts: districts.count || 0,
        postals: postals.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Countries',
      value: stats.countries,
      icon: Globe,
      description: 'Total countries in database',
      href: '/dashboard/admin/states',
    },
    {
      title: 'States',
      value: stats.states,
      icon: Map,
      description: 'Total states/provinces',
      href: '/dashboard/admin/states',
    },
    {
      title: 'Districts',
      value: stats.districts,
      icon: Building2,
      description: 'Total districts/cities',
      href: '/dashboard/admin/districts',
    },
    {
      title: 'Postal Codes',
      value: stats.postals,
      icon: Mail,
      description: 'Total postal codes',
      href: '/dashboard/admin/postal',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Manage geographical data including states, districts, and postal codes
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {statCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? '...' : card.value.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {card.description}
              </p>
              <Link href={card.href}>
                <Button variant="link" className="px-0 mt-2">
                  Manage →
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/dashboard/admin/states">
              <Button className="w-full justify-start" variant="outline">
                <Map className="mr-2 h-4 w-4" />
                Manage States
              </Button>
            </Link>
            <Link href="/dashboard/admin/districts">
              <Button className="w-full justify-start" variant="outline">
                <Building2 className="mr-2 h-4 w-4" />
                Manage Districts
              </Button>
            </Link>
            <Link href="/dashboard/admin/postal">
              <Button className="w-full justify-start" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Manage Postal Codes
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No recent activity to display
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Database</span>
                <span className="text-sm font-medium text-green-600">
                  Connected
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">API Status</span>
                <span className="text-sm font-medium text-green-600">
                  Operational
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
