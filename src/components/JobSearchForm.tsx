import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase, Clock, ExternalLink, CheckCircle } from "lucide-react";

const JobSearchForm = () => {
  const [searchParams, setSearchParams] = useState({
    keywords: 'Software Engineer Fresher',
    location: 'Remote, India',
    platforms: ['LinkedIn', 'Naukri', 'Hirist']
  });

  const [isSearching, setIsSearching] = useState(false);
  const [jobResults, setJobResults] = useState([
    {
      id: 1,
      title: 'Junior Software Developer',
      company: 'TechCorp',
      location: 'Bangalore, India',
      platform: 'LinkedIn',
      postedDate: '2 days ago',
      applied: false,
      match: 95
    },
    {
      id: 2,
      title: 'Graduate Software Engineer',
      company: 'InnovateTech',
      location: 'Remote',
      platform: 'Naukri',
      postedDate: '1 day ago',
      applied: false,
      match: 88
    },
    {
      id: 3,
      title: 'Trainee Developer',
      company: 'StartupXYZ',
      location: 'Hyderabad, India',
      platform: 'Hirist',
      postedDate: '3 hours ago',
      applied: true,
      match: 92
    }
  ]);

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  const handleAutoApply = (jobId: number) => {
    setJobResults(prev => 
      prev.map(job => 
        job.id === jobId ? { ...job, applied: true } : job
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Search Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Job Search Configuration</span>
          </CardTitle>
          <CardDescription>
            Configure your job search parameters and let AI find the best matches
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Keywords</label>
              <input
                type="text"
                value={searchParams.keywords}
                onChange={(e) => setSearchParams({...searchParams, keywords: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Software Engineer Fresher, Intern"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                value={searchParams.location}
                onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Remote, Bangalore, India"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Job Platforms</label>
            <div className="flex flex-wrap gap-2">
              {['LinkedIn', 'Naukri', 'Hirist'].map(platform => (
                <Badge 
                  key={platform}
                  variant={searchParams.platforms.includes(platform) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => {
                    setSearchParams({
                      ...searchParams,
                      platforms: searchParams.platforms.includes(platform)
                        ? searchParams.platforms.filter(p => p !== platform)
                        : [...searchParams.platforms, platform]
                    });
                  }}
                >
                  {platform}
                </Badge>
              ))}
            </div>
          </div>

          <Button onClick={handleSearch} disabled={isSearching} className="w-full">
            {isSearching ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Searching Jobs...
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Search Jobs
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Job Results */}
      <Card>
        <CardHeader>
          <CardTitle>Job Results</CardTitle>
          <CardDescription>
            Found {jobResults.length} matching jobs. Click to auto-apply with AI-customized resume.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {jobResults.map(job => (
              <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.postedDate}
                      </span>
                      <Badge variant="outline">{job.platform}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600 mb-2">
                      {job.match}% Match
                    </div>
                    {job.applied ? (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Applied
                      </Badge>
                    ) : (
                      <Button 
                        size="sm" 
                        onClick={() => handleAutoApply(job.id)}
                        className="w-20"
                      >
                        Apply
                      </Button>
                    )}
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

export default JobSearchForm;
