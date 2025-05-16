"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

// Mock data
const papers = [
  {
    id: 1,
    title: "Data Structures Final Exam",
    subject: "Computer Science",
    semester: "Spring",
    year: "2023",
    solutions: 6,
    author: "John Doe",
    uploadedAt: "2 weeks ago",
  },
  {
    id: 2,
    title: "Calculus II Midterm",
    subject: "Mathematics",
    semester: "Fall",
    year: "2022",
    solutions: 4,
    author: "Jane Smith",
    uploadedAt: "1 month ago",
  },
  {
    id: 3,
    title: "Organic Chemistry Final",
    subject: "Chemistry",
    semester: "Spring",
    year: "2023",
    solutions: 8,
    author: "Robert Johnson",
    uploadedAt: "3 weeks ago",
  },
  {
    id: 4,
    title: "Introduction to Psychology Quiz",
    subject: "Psychology",
    semester: "Summer",
    year: "2022",
    solutions: 2,
    author: "Emily Davis",
    uploadedAt: "2 months ago",
  },
  {
    id: 5,
    title: "Microeconomics Midterm",
    subject: "Economics",
    semester: "Fall",
    year: "2023",
    solutions: 5,
    author: "Michael Brown",
    uploadedAt: "1 week ago",
  },
  {
    id: 6,
    title: "Digital Signal Processing Exam",
    subject: "Electrical Engineering",
    semester: "Spring",
    year: "2022",
    solutions: 3,
    author: "Sarah Wilson",
    uploadedAt: "3 months ago",
  },
  {
    id: 7,
    title: "Database Systems Project",
    subject: "Computer Science",
    semester: "Fall",
    year: "2023",
    solutions: 7,
    author: "David Lee",
    uploadedAt: "5 days ago",
  },
  {
    id: 8,
    title: "Thermodynamics Final Exam",
    subject: "Physics",
    semester: "Spring",
    year: "2022",
    solutions: 4,
    author: "Lisa Chen",
    uploadedAt: "2 months ago",
  },
]

export default function PapersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [subjectFilter, setSubjectFilter] = useState("")
  const [semesterFilter, setSemesterFilter] = useState("")
  const [yearFilter, setYearFilter] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Get unique subjects, semesters, and years for filters
  const subjects = [...new Set(papers.map((paper) => paper.subject))]
  const semesters = [...new Set(papers.map((paper) => paper.semester))]
  const years = [...new Set(papers.map((paper) => paper.year))]

  // Filter papers based on search query and filters
  const filteredPapers = papers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subject.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSubject = subjectFilter === "" || paper.subject === subjectFilter
    const matchesSemester = semesterFilter === "" || paper.semester === semesterFilter
    const matchesYear = yearFilter === "" || paper.year === yearFilter

    return matchesSearch && matchesSubject && matchesSemester && matchesYear
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Exam Papers</h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search papers..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 border rounded-lg bg-muted/20">
          <div>
            <label className="text-sm font-medium mb-1 block">Subject</label>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Subjects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Semester</label>
            <Select value={semesterFilter} onValueChange={setSemesterFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Semesters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Semesters</SelectItem>
                {semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    {semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Year</label>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {filteredPapers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <Link href={`/papers/${paper.id}`} key={paper.id}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{paper.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {paper.subject} • {paper.semester} {paper.year}
                      </p>
                    </div>
                    <Badge variant="outline">{paper.solutions} Solutions</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>
                      Uploaded by {paper.author} • {paper.uploadedAt}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No papers found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
          <Button asChild>
            <Link href="/upload">Upload a Paper</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
