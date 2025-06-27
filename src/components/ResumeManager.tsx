
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Upload, Wand2, Download, Eye, Trash2 } from "lucide-react";

const ResumeManager = () => {
  const [resumes] = useState([
    {
      id: 1,
      name: 'Base Resume',
      type: 'base',
      createdDate: '2024-01-10',
      lastModified: '2024-01-10',
      applications: 0,
      isActive: true
    },
    {
      id: 2,
      name: 'Resume_v2_TechCorp',
      type: 'ai-generated',
      createdDate: '2024-01-15',
      lastModified: '2024-01-15',
      applications: 1,
      isActive: false,
      jobTitle: 'Junior Software Developer',
      company: 'TechCorp'
    },
    {
      id: 3,
      name: 'Resume_v3_StartupXYZ',
      type: 'ai-generated',
      createdDate: '2024-01-13',
      lastModified: '2024-01-13',
      applications: 1,
      isActive: false,
      jobTitle: 'Trainee Developer',
      company: 'StartupXYZ'
    }
  ]);

  const [coverLetters] = useState([
    {
      id: 1,
      name: 'CoverLetter_TechCorp',
      createdDate: '2024-01-15',
      jobTitle: 'Junior Software Developer',
      company: 'TechCorp'
    },
    {
      id: 2,
      name: 'CoverLetter_StartupXYZ',
      createdDate: '2024-01-13',
      jobTitle: 'Trainee Developer',
      company: 'StartupXYZ'
    }
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file.name);
      // Handle file upload logic here
    }
  };

  const handleGenerateResume = () => {
    console.log('Generate AI resume');
    // Handle AI resume generation
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5" />
            <span>Upload Base Resume</span>
          </CardTitle>
          <CardDescription>
            Upload your base resume that will be used to generate customized versions for each job application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="cursor-pointer">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500">PDF, DOC, DOCX up to 10MB</p>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Resume Versions */}
      <Card>
        <CardHeader>
          <CardTitle>Resume Versions</CardTitle>
          <CardDescription>
            Manage your base resume and AI-generated customized versions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {resumes.map(resume => (
              <div key={resume.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{resume.name}</h3>
                      {resume.type === 'base' ? (
                        <Badge variant="outline">Base Resume</Badge>
                      ) : (
                        <Badge className="bg-purple-100 text-purple-800">AI Generated</Badge>
                      )}
                      {resume.isActive && (
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      )}
                    </div>
                    
                    {resume.type === 'ai-generated' && (
                      <p className="text-sm text-gray-600 mb-2">
                        Customized for <span className="font-medium">{resume.jobTitle}</span> at <span className="font-medium">{resume.company}</span>
                      </p>
                    )}
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Created: {resume.createdDate}</span>
                      <span>Applications: {resume.applications}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    {resume.type !== 'base' && (
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Resume Generator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wand2 className="h-5 w-5" />
            <span>AI Resume Generator</span>
          </CardTitle>
          <CardDescription>
            Generate customized resumes and cover letters using AI for specific job applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Job Description</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Paste the job description here to generate a customized resume..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Job Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Junior Software Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., TechCorp"
                />
              </div>
            </div>
            
            <Button onClick={handleGenerateResume} className="w-full">
              <Wand2 className="h-4 w-4 mr-2" />
              Generate Customized Resume & Cover Letter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Cover Letters */}
      <Card>
        <CardHeader>
          <CardTitle>Cover Letters</CardTitle>
          <CardDescription>
            AI-generated cover letters for your job applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coverLetters.map(letter => (
              <div key={letter.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{letter.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      For <span className="font-medium">{letter.jobTitle}</span> at <span className="font-medium">{letter.company}</span>
                    </p>
                    <p className="text-sm text-gray-500">Created: {letter.createdDate}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeManager;
