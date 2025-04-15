import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Upload,
  KeyRound,
  User,
  Mail,
  Phone,
  Calendar,
  Save,
  Edit,
} from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  age: number;
  resumeUrl?: string;
}

// Floating Element Component
const FloatingElement = ({ size, color, delay, duration, left }) => {
  return (
    <div
      className="absolute rounded-full opacity-60 pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        left: `${left}%`,
        top: "-20px",
        animation: `float ${duration}s ease-in-out infinite ${delay}s`,
      }}
    />
  );
};

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    age: 25,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Create floating elements on component mount
    const elements = [];
    const colors = ["#e0c3fc", "#8ec5fc", "#fbc2eb", "#a6c1ee", "#c2e9fb"];
    const sizes = [20, 30, 40, 50, 60];

    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 20,
        left: Math.random() * 100,
      });
    }

    setFloatingElements(elements);
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      // Here you would typically upload the file to your server
      console.log("File uploaded:", file);
      // Update the resume URL after successful upload
      setProfile((prev) => ({ ...prev, resumeUrl: URL.createObjectURL(file) }));
    } else {
      alert("Please upload a PDF file");
    }
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Here you would typically make an API call to update the password
    console.log("Password changed:", newPassword);
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating elements */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(100px) rotate(10deg);
          }
        }
      `}</style>

      {floatingElements.map((elem) => (
        <FloatingElement
          key={elem.id}
          size={elem.size}
          color={elem.color}
          delay={elem.delay}
          duration={elem.duration}
          left={elem.left}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Profile Header */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 flex items-center justify-center shadow-lg">
              <User size={48} className="text-white" />
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
              <button className="bg-purple-200 p-1 rounded-full">
                <Edit size={14} className="text-purple-600" />
              </button>
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            {profile.name}
          </h1>
          <p className="text-gray-700 font-medium">{profile.email}</p>
        </div>

        {/* Profile Card */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl shadow-xl border border-white/60 overflow-hidden">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Profile Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <div className="backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-white/60 shadow-md">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <User size={14} className="text-purple-500" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, name: e.target.value }))
                    }
                    disabled={!isEditing}
                    className="mt-1 border-0 bg-white/80 text-gray-800 font-medium focus:ring-2 focus:ring-purple-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-white/60 shadow-md">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Mail size={14} className="text-blue-500" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, email: e.target.value }))
                    }
                    disabled={!isEditing}
                    className="mt-1 border-0 bg-white/80 text-gray-800 font-medium focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-white/60 shadow-md">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Phone size={14} className="text-green-500" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    disabled={!isEditing}
                    className="mt-1 border-0 bg-white/80 text-gray-800 font-medium focus:ring-2 focus:ring-green-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-white/60 shadow-md">
                  <Label
                    htmlFor="age"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Calendar size={14} className="text-pink-500" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={profile.age}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        age: parseInt(e.target.value),
                      }))
                    }
                    disabled={!isEditing}
                    className="mt-1 border-0 bg-white/80 text-gray-800 font-medium focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="mb-8">
              <div className="backdrop-blur-sm bg-white/80 p-6 rounded-xl border border-white/60 shadow-md">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Resume
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="outline"
                    className="bg-gradient-to-r from-blue-100 to-purple-100 border-white/60 hover:bg-white text-gray-800 font-medium flex items-center gap-2 rounded-xl shadow-md"
                    onClick={() =>
                      document.getElementById("resume-upload")?.click()
                    }
                  >
                    <Upload size={16} className="text-purple-500" />
                    <span>Upload Resume</span>
                  </Button>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  {profile.resumeUrl && (
                    <a
                      href={profile.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors px-4 py-2 rounded-lg bg-blue-100/80 border border-blue-200 shadow-md"
                    >
                      View Current Resume
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Password Change */}
            <div className="mb-8">
              <div className="backdrop-blur-sm bg-white/80 p-6 rounded-xl border border-white/60 shadow-md">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Change Password
                </h3>
                <div className="space-y-4">
                  <Input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-0 bg-white/80 text-gray-800 font-medium focus:ring-2 focus:ring-purple-300 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-0 bg-white/80 text-gray-800 font-medium focus:ring-2 focus:ring-purple-300 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md"
                  />
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium border-0 rounded-xl shadow-md flex items-center gap-2"
                    onClick={handlePasswordChange}
                  >
                    <KeyRound size={16} />
                    Update Password
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end">
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className={`rounded-xl shadow-md flex items-center gap-2 font-medium ${
                  isEditing
                    ? "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"
                    : "bg-gradient-to-r from-purple-200 to-pink-200 text-purple-700 hover:text-purple-800"
                }`}
              >
                {isEditing ? (
                  <>
                    <Save size={16} />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit size={16} />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
