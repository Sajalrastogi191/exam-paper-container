"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function ProfilePage() {
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john.doe@example.com")
  const [bio, setBio] = useState("Computer Science student at Example University.")
  const [isSaving, setIsSaving] = useState(false)

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate saving
    setTimeout(() => {
      setIsSaving(false)
    }, 1500)
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setIsChangingPassword(true)

    // Simulate password change
    setTimeout(() => {
      setIsChangingPassword(false)
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    }, 1500)
  }

  // Mock data for user stats
  const userStats = {
    papersUploaded: 5,
    solutionsSubmitted: 12,
    upvotesReceived: 28,
  }

  // Mock data for user activity
  const recentActivity = [
    { type: "upload", title: "Data Structures Final Exam", date: "2 weeks ago" },
    { type: "solution", title: "Calculus II Midterm", date: "1 week ago" },
    { type: "upvote", title: "Organic Chemistry Final", date: "3 days ago" },
    { type: "solution", title: "Introduction to Psychology Quiz", date: "1 day ago" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
              <AvatarFallback className="text-4xl">JD</AvatarFallback>
            </Avatar>
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-muted-foreground">{email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold">{userStats.papersUploaded}</p>
                <p className="text-sm text-muted-foreground">Papers Uploaded</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold">{userStats.solutionsSubmitted}</p>
                <p className="text-sm text-muted-foreground">Solutions Submitted</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold">{userStats.upvotesReceived}</p>
                <p className="text-sm text-muted-foreground">Upvotes Received</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <form onSubmit={handleSaveProfile}>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <form onSubmit={handleChangePassword}>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isChangingPassword}>
                    {isChangingPassword ? "Changing Password..." : "Change Password"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent activity on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium">
                          {activity.type === "upload"
                            ? "Uploaded a paper"
                            : activity.type === "solution"
                              ? "Submitted a solution"
                              : "Received an upvote"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <Link href="#" className="hover:underline">
                            {activity.title}
                          </Link>
                          {" • "}
                          {activity.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
