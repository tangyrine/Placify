import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, Code, Star } from "lucide-react";

const GuidesResources = () => {
  return (
    <div className="space-y-10">
      {/* Build Your Resume Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Build Your Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300 rounded-3xl border-[3px] border-blue-200/40">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 h-full">
                <div>
                  <h3 className="text-xl font-medium">
                    Build your Resume using ATS-Friendly Templates
                  </h3>
                  <p className="text-sm opacity-80 mt-2">
                    Get started with the most popular template site
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 rounded-full"
                    onClick={() =>
                      window.open("https://www.overleaf.com/", "_blank")
                    }
                  >
                    Build using Overleaf
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300 rounded-3xl border-[3px] border-blue-200/40">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 h-full">
                <div>
                  <h3 className="text-xl font-medium">
                    Check your Resume Score
                  </h3>
                  <p className="text-sm opacity-80 mt-2">
                    Trusted by thousands to assess your resume
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 rounded-full"
                    onClick={() =>
                      window.open("https://resumeworded.com/", "_blank")
                    }
                  >
                    Check using ResumeWorded
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interview Preparation Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Interview Preparation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300 rounded-3xl border-[3px] border-blue-200/40">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://i.pinimg.com/736x/0d/20/01/0d2001efe877741b135107e5c0200241.jpg"
                    alt="Mock Interview"
                    className="w-full h-1/3"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-center">
                    Take a Mock Interview
                  </h3>
                  <p className="text-sm opacity-80 mt-2 text-center">
                    Practice with AI-simulated interviews tailored to your field
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 rounded-full"
                    onClick={() =>
                      window.open("https://www.pramp.com/", "_blank")
                    }
                  >
                    Start Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300 rounded-3xl border-[3px] border-blue-200/40">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://i.pinimg.com/736x/63/ff/cf/63ffcf5907ebd9c31fc1c85ce3193d40.jpg"
                    alt="Common Interview Questions"
                    className="w-full h-1/2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-center">
                    Common Interview Questions
                  </h3>
                  <p className="text-sm opacity-80 mt-2 text-center">
                    Prepare with the most frequently asked questions by top
                    companies
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 rounded-full"
                    onClick={() =>
                      window.open(
                        "https://www.themuse.com/advice/interview-questions-and-answers",
                        "_blank"
                      )
                    }
                  >
                    Start Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300 rounded-3xl border-[3px] border-blue-200/40">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://i.pinimg.com/736x/24/66/b0/2466b03b92409b8154033b979923e03a.jpg"
                    alt="Important DSA Concepts"
                    className="w-full h-1/2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-center">
                    Important DSA Concepts
                  </h3>
                  <p className="text-sm opacity-80 mt-2 text-center">
                    Master the key data structures and algorithms needed for
                    technical interviews
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 rounded-full"
                    onClick={() =>
                      window.open(
                        "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
                        "_blank"
                      )
                    }
                  >
                    Start Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Preparation Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Company Preparation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Google",
              logo: "G",
              tagline: "Ace your coding round at Google",
            },
            {
              name: "Microsoft",
              logo: "M",
              tagline: "Prepare for Microsoft's system design questions",
            },
            {
              name: "Amazon",
              logo: "A",
              tagline: "Master Amazon's leadership principles",
            },
            {
              name: "Meta",
              logo: "F",
              tagline: "Learn Meta's interview process",
            },
            {
              name: "Apple",
              logo: "A",
              tagline: "Prepare for Apple's UI/UX questions",
            },
            {
              name: "Netflix",
              logo: "N",
              tagline: "Ace Netflix's technical interviews",
            },
            {
              name: "Goldman Sachs",
              logo: "GS",
              tagline: "Master Goldman Sachs' financial rounds",
            },
            {
              name: "IBM",
              logo: "IBM",
              tagline: "Prepare for IBM's technical questions",
            },
          ].map((company, index) => (
            <Card
              key={index}
              className={`glass-card overflow-hidden hover:shadow-lg transition-all duration-300 rounded-3xl border-[3px] border-blue-200/40 ${
                index % 3 === 0
                  ? "bg-blue-100"
                  : index % 3 === 1
                  ? "bg-yellow-100"
                  : "bg-green-100"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 h-16 w-16 flex items-center justify-center rounded-lg text-2xl font-bold">
                      {company.logo}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-center">
                      {company.name}
                    </h3>
                    <p className="text-sm opacity-80 mt-2 text-center">
                      {company.tagline}
                    </p>
                  </div>
                  <div className="mt-auto pt-2 flex justify-center">
                    <Button
                      variant="ghost"
                      className="hover:bg-white/10 flex items-center gap-2"
                    >
                      Start now <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuidesResources;
