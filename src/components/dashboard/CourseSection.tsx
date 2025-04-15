import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EnrolledCourse {
  id: string;
  title: string;
  image: string;
  progress: number;
  lessons: number;
  duration: string;
}

const enrolledCourses: EnrolledCourse[] = [
  {
    id: "1",
    title: "Web Development",
    image:
      "https://i.pinimg.com/736x/25/2c/e1/252ce16e4c0366758e642a48d7dd5292.jpg",
    progress: 75,
    lessons: 22,
    duration: "3 months",
  },
  {
    id: "2",
    title: "Machine Learning",
    image:
      "https://cdn.dribbble.com/userupload/32981195/file/original-0485b8232627dedcbd6b4f43f150b5a6.jpg?resize=752x&vertical=center",
    progress: 45,
    lessons: 20,
    duration: "2 months",
  },
  {
    id: "3",
    title: "Cloud Computing",
    image:
      "https://i.pinimg.com/736x/5f/b8/e0/5fb8e06c813dde6abe32dae19dca4ba5.jpg",
    progress: 30,
    lessons: 28,
    duration: "3 months",
  },
];

const CourseSection = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Courses</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <Card
            key={course.id}
            className="glass-card overflow-hidden hover:shadow-lg transition-shadow rounded-3xl border-[3px] border-blue-200/40 "
          >
            <div className="aspect-video relative overflow-hidden rounded-3xl p-6">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{course.lessons} lessons</span>
                  <span>{course.duration}</span>
                </div>
              </div>
              <Button className="w-full bg-pink-400 hover:bg-blue-700 text-white rounded-full">
                View Course
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
