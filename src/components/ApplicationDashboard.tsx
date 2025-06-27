
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, XCircle, Eye, FileText, Calendar } from "lucide-react";

const ApplicationDashboard = () => {
  const [applications] = useState([
    {
      id: 1,
      jobTitle: 'Junior Software Developer',
      company: 'TechCorp',
      platform: 'LinkedIn',
      appliedDate: '2024-01-15',
      status: 'applied',
      resumeVersion: 'Resume_v2_TechCorp.pdf',
      coverLetter: 'CoverLetter_TechCorp.pdf',
      response: null
    },
    {
      id: 2,
      jobTitle: 'Graduate Software Engineer',
      company: 'InnovateTech',
      platform: 'Naukri',
      appliedDate: '2024-01-14',
      status: 'viewed',
      resumeVersion: 'Resume_v1_InnovateTech.pdf',
      coverLetter: 'CoverLetter_InnovateTech.pdf',
      response: 'Profile viewed by recruiter'
    },
    {
      id: 3,
      jobTitle: 'Trainee Developer',
      company: 'StartupXYZ',
      platform: 'Hirist',
      appliedDate: '2024-01-13',
      status: 'rejected',
      resumeVersion: 'Resume_v3_StartupXYZ.pdf',
      coverLetter: 'CoverLetter_StartupXYZ.pdf',
      response: 'Thank you for your interest. We have decided to move forward with other candidates.'
    },
    {
      id: 4,
      jobTitle: 'Software Engineer Intern',
      company: 'BigTech',
      platform: 'LinkedIn',
      appliedDate: '2024-01-12',
      status: 'interview',
      resumeVersion: 'Resume_v4_BigTech.pdf',
      coverLetter: 'CoverLetter_BigTech.pdf',
      response: 'Congratulations! You have been selected for the first round of interviews.'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'viewed':
        return <Eye className="h-4 w-4 text-blue-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'interview':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      applied: 'bg-yellow-100 text-yellow-800',
      viewed: 'bg-blue-100 text-blue-800',
      rejected: 'bg-red-100 text-red-800',
      interview: 'bg-green-100 text-green-800'
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>
            Track your job applications and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applications.map(app => (
              <div key={app.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      {getStatusIcon(app.status)}
                      <h3 className="font-semibold text-gray-900">{app.jobTitle}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{app.company} • {app.platform}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Applied {app.appliedDate}
                      </span>
                      <span className="flex items-center">
                        <FileText className="h-3 w-3 mr-1" />
                        {app.resumeVersion}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(app.status)}
                  </div>
                </div>
                
                {app.response && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-700">{app.response}</p>
                  </div>
                )}
                
                <div className="mt-3 flex space-x-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Download Resume
                  </Button>
                  <Button variant="outline" size="sm">
                    Download Cover Letter
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Manage your job search automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex-col space-y-2">
              <CheckCircle className="h-6 w-6" />
              <span>Start Auto-Apply</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <FileText className="h-6 w-6" />
              <span>Update Resume</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Eye className="h-6 w-6" />
              <span>View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationDashboard;
