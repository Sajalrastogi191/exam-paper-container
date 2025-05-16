"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, ThumbsDown, Download, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaperDetailPage({ params }: { params: { id: string } }) {
  const [newSolution, setNewSolution] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock paper data
  const paper = {
    id: Number.parseInt(params.id),
    title: "Data Structures Final Exam",
    subject: "Computer Science",
    semester: "Spring",
    year: "2023",
    description:
      "This is the final exam for the Data Structures course covering topics such as arrays, linked lists, trees, graphs, and algorithms.",
    fileUrl: "#",
    author: "John Doe",
    authorId: "user1",
    uploadedAt: "2 weeks ago",
  }

  // Mock solutions data
  const solutions = [
    {
      id: 1,
      content:
        "For question 1, the time complexity of the algorithm is O(n log n) because it uses a divide and conquer approach similar to merge sort. The space complexity is O(n) due to the auxiliary arrays created during the recursive calls.",
      author: "Jane Smith",
      authorId: "user2",
      createdAt: "1 week ago",
      upvotes: 12,
      downvotes: 2,
    },
    {
      id: 2,
      content:
        "Question 3 is asking about balanced binary search trees. The AVL tree maintains balance by ensuring that the height difference between left and right subtrees is at most 1. This is achieved through rotations after insertions and deletions.",
      author: "Robert Johnson",
      authorId: "user3",
      createdAt: "5 days ago",
      upvotes: 8,
      downvotes: 1,
    },
    {
      id: 3,
      content:
        "For the graph traversal problem in question 5, you should use Breadth-First Search (BFS) because it finds the shortest path in an unweighted graph. The time complexity is O(V + E) where V is the number of vertices and E is the number of edges.",
      author: "Emily Davis",
      authorId: "user4",
      createdAt: "3 days ago",
      upvotes: 5,
      downvotes: 0,
    },
  ]

  const handleSubmitSolution = () => {
    if (!newSolution.trim()) return

    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setNewSolution("")
      setIsSubmitting(false)
      // Would add the new solution to the list in a real app
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/papers" className="flex items-center text-primary mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Papers
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl">{paper.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">{paper.subject}</Badge>
                    <Badge variant="outline">
                      {paper.semester} {paper.year}
                    </Badge>
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Paper
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">{paper.description}</p>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt={paper.author} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>
                  Uploaded by {paper.author} • {paper.uploadedAt}
                </span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Tabs defaultValue="solutions">
              <TabsList className="mb-4">
                <TabsTrigger value="solutions">Solutions ({solutions.length})</TabsTrigger>
                <TabsTrigger value="add">Add Solution</TabsTrigger>
              </TabsList>

              <TabsContent value="solutions">
                {solutions.length > 0 ? (
                  <div className="space-y-6">
                    {solutions.map((solution) => (
                      <Card key={solution.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt={solution.author} />
                                <AvatarFallback>{solution.author.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{solution.author}</p>
                                <p className="text-sm text-muted-foreground">{solution.createdAt}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <ThumbsUp className="h-4 w-4" />
                                </Button>
                                <span className="text-sm">{solution.upvotes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <ThumbsDown className="h-4 w-4" />
                                </Button>
                                <span className="text-sm">{solution.downvotes}</span>
                              </div>
                            </div>
                          </div>
                          <p className="whitespace-pre-line">{solution.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No solutions yet</h3>
                    <p className="text-muted-foreground mb-6">Be the first to add a solution</p>
                    <Button onClick={() => document.querySelector('[data-value="add"]')?.click()}>Add Solution</Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="add">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Add Your Solution</h3>
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Write your solution here..."
                        className="min-h-[200px]"
                        value={newSolution}
                        onChange={(e) => setNewSolution(e.target.value)}
                      />
                      <Button onClick={handleSubmitSolution} disabled={!newSolution.trim() || isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Solution"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Related Papers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((id) => (
                  <Link href={`/papers/${id}`} key={id} className="block">
                    <div className="p-3 rounded-lg hover:bg-muted transition-colors">
                      <h4 className="font-medium mb-1">
                        {id === 1
                          ? "Data Structures Midterm"
                          : id === 2
                            ? "Algorithms Final Exam"
                            : "Object-Oriented Programming Quiz"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Computer Science • {id === 1 ? "Spring 2023" : id === 2 ? "Fall 2022" : "Summer 2023"}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
