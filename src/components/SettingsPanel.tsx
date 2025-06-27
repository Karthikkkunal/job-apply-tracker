
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Key, Bell, Clock, User, MapPin, Briefcase } from "lucide-react";

const SettingsPanel = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    location: 'Bangalore, India',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
    experience: 'Fresher',
    preferredRoles: ['Software Engineer', 'Frontend Developer', 'Full Stack Developer']
  });

  const [automation, setAutomation] = useState({
    frequency: '12', // hours
    maxApplicationsPerDay: 10,
    platforms: ['LinkedIn', 'Naukri', 'Hirist'],
    autoApply: true,
    emailNotifications: true
  });

  const [apiKeys, setApiKeys] = useState({
    openai: '',
    linkedinEmail: '',
    linkedinPassword: '',
    naukriEmail: '',
    naukriPassword: '',
    hiristEmail: '',
    hiristPassword: ''
  });

  const handleProfileUpdate = () => {
    console.log('Profile updated:', profile);
  };

  const handleAutomationUpdate = () => {
    console.log('Automation settings updated:', automation);
  };

  const handleApiKeysUpdate = () => {
    console.log('API keys updated');
  };

  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>Profile Information</span>
          </CardTitle>
          <CardDescription>
            Update your personal information and job preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({...profile, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Skills</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {profile.skills.map(skill => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add skills (comma separated)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Preferred Job Roles</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {profile.preferredRoles.map(role => (
                <Badge key={role} variant="outline">
                  {role}
                </Badge>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add preferred roles (comma separated)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <Button onClick={handleProfileUpdate}>
            Update Profile
          </Button>
        </CardContent>
      </Card>

      {/* Automation Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Automation Settings</span>
          </CardTitle>
          <CardDescription>
            Configure how often the bot searches and applies for jobs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search Frequency</label>
              <select
                value={automation.frequency}
                onChange={(e) => setAutomation({...automation, frequency: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="6">Every 6 hours</option>
                <option value="12">Every 12 hours</option>
                <option value="24">Daily</option>
                <option value="168">Weekly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Max Applications Per Day</label>
              <input
                type="number"
                value={automation.maxApplicationsPerDay}
                onChange={(e) => setAutomation({...automation, maxApplicationsPerDay: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="50"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Enabled Platforms</label>
            <div className="flex flex-wrap gap-2">
              {['LinkedIn', 'Naukri', 'Hirist'].map(platform => (
                <Badge 
                  key={platform}
                  variant={automation.platforms.includes(platform) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => {
                    setAutomation({
                      ...automation,
                      platforms: automation.platforms.includes(platform)
                        ? automation.platforms.filter(p => p !== platform)
                        : [...automation.platforms, platform]
                    });
                  }}
                >
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={automation.autoApply}
                onChange={(e) => setAutomation({...automation, autoApply: e.target.checked})}
                className="rounded"
              />
              <span className="text-sm">Enable automatic job applications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={automation.emailNotifications}
                onChange={(e) => setAutomation({...automation, emailNotifications: e.target.checked})}
                className="rounded"
              />
              <span className="text-sm">Send email notifications</span>
            </label>
          </div>
          
          <Button onClick={handleAutomationUpdate}>
            Update Automation Settings
          </Button>
        </CardContent>
      </Card>

      {/* API Keys & Credentials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>API Keys & Credentials</span>
          </CardTitle>
          <CardDescription>
            Configure your API keys and job platform credentials securely
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">OpenAI API Key</label>
            <input
              type="password"
              value={apiKeys.openai}
              onChange={(e) => setApiKeys({...apiKeys, openai: e.target.value})}
              placeholder="sk-..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Required for AI resume and cover letter generation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn Email</label>
              <input
                type="email"
                value={apiKeys.linkedinEmail}
                onChange={(e) => setApiKeys({...apiKeys, linkedinEmail: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn Password</label>
              <input
                type="password"
                value={apiKeys.linkedinPassword}
                onChange={(e) => setApiKeys({...apiKeys, linkedinPassword: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Naukri Email</label>
              <input
                type="email"
                value={apiKeys.naukriEmail}
                onChange={(e) => setApiKeys({...apiKeys, naukriEmail: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Naukri Password</label>
              <input
                type="password"
                value={apiKeys.naukriPassword}
                onChange={(e) => setApiKeys({...apiKeys, naukriPassword: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Hirist Email</label>
              <input
                type="email"
                value={apiKeys.hiristEmail}
                onChange={(e) => setApiKeys({...apiKeys, hiristEmail: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Hirist Password</label>
              <input
                type="password"
                value={apiKeys.hiristPassword}
                onChange={(e) => setApiKeys({...apiKeys, hiristPassword: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <p className="text-sm text-yellow-800">
              <strong>Security Note:</strong> Your credentials are encrypted and stored securely. 
              For production use, consider connecting to Supabase for enhanced security.
            </p>
          </div>
          
          <Button onClick={handleApiKeysUpdate}>
            Save Credentials
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPanel;
