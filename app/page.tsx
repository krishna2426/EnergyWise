"use client"

import { useState, useEffect } from "react"
import {
  Zap,
  Mic,
  Phone,
  TrendingDown,
  Home,
  Bed,
  ChefHat,
  Bath,
  Lightbulb,
  Thermometer,
  Tv,
  WashingMachineIcon as Washing,
  Droplets,
  Users,
  CheckCircle,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

interface Room {
  id: string
  name: string
  icon: any
  lightsOn: number
  totalLights: number
  isActive: boolean
}

interface Appliance {
  id: string
  name: string
  icon: any
  isOn: boolean
  status: string
}

export default function EnergyWiseDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isListening, setIsListening] = useState(false)
  const [temperature, setTemperature] = useState(24)
  const [brightness, setBrightness] = useState([75])
  const [showFeedback, setShowFeedback] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [rooms, setRooms] = useState<Room[]>([
    { id: "living", name: "Living Room", icon: Home, lightsOn: 2, totalLights: 3, isActive: true },
    { id: "bedroom", name: "Bedroom", icon: Bed, lightsOn: 1, totalLights: 2, isActive: true },
    { id: "kitchen", name: "Kitchen", icon: ChefHat, lightsOn: 0, totalLights: 4, isActive: false },
    { id: "bathroom", name: "Bathroom", icon: Bath, lightsOn: 1, totalLights: 1, isActive: true },
  ])

  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: "tv", name: "TV", icon: Tv, isOn: true, status: "Living Room" },
    { id: "washer", name: "Washer", icon: Washing, isOn: false, status: "Off" },
    { id: "heater", name: "Water Heater", icon: Droplets, isOn: true, status: "Heating" },
  ])

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const handleVoiceCommand = () => {
    setIsListening(true)
    setTimeout(() => {
      setIsListening(false)
      setShowFeedback("Voice command received: 'Turn off living room lights'")
      setTimeout(() => setShowFeedback(""), 3000)
    }, 2000)
  }

  const handleEmergencyCall = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowFeedback("Emergency contact notified!")
      setTimeout(() => setShowFeedback(""), 3000)
    }, 1500)
  }

  const toggleRoom = (roomId: string) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? { ...room, isActive: !room.isActive, lightsOn: room.isActive ? 0 : room.totalLights }
          : room,
      ),
    )
    setShowFeedback(`${rooms.find((r) => r.id === roomId)?.name} lights toggled`)
    setTimeout(() => setShowFeedback(""), 2000)
  }

  const toggleAppliance = (applianceId: string) => {
    setAppliances(
      appliances.map((appliance) =>
        appliance.id === applianceId
          ? { ...appliance, isOn: !appliance.isOn, status: appliance.isOn ? "Off" : "On" }
          : appliance,
      ),
    )
    setShowFeedback(`${appliances.find((a) => a.id === applianceId)?.name} toggled`)
    setTimeout(() => setShowFeedback(""), 2000)
  }

  const handleTemperatureChange = (delta: number) => {
    const newTemp = Math.max(16, Math.min(30, temperature + delta))
    setTemperature(newTemp)
    setShowFeedback(`Temperature set to ${newTemp}°C`)
    setTimeout(() => setShowFeedback(""), 2000)
  }

  const currentUsage = 2.4
  const todayCost = 700
  const monthlyProgress = 75
  const savingsGoal = 85

  const getUsageColor = (usage: number) => {
    if (usage < 2) return "text-green-600"
    if (usage < 3) return "text-yellow-600"
    return "text-red-600"
  }

  const getUsageBgColor = (usage: number) => {
    if (usage < 2) return "bg-green-50 border-green-200"
    if (usage < 3) return "bg-yellow-50 border-yellow-200"
    return "bg-red-50 border-red-200"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Feedback Banner */}
        {showFeedback && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 text-lg font-medium">
            <CheckCircle className="h-5 w-5" />
            {showFeedback}
          </div>
        )}

        {/* Header */}
        <Card className="bg-white shadow-lg border-2">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">EnergyWise</h1>
                  <p className="text-xl text-gray-600">
                    {currentTime.toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-lg text-gray-500">
                    {currentTime.toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleVoiceCommand}
                  disabled={isListening}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 text-lg h-auto min-w-[120px]"
                >
                  {isListening ? (
                    <>
                      <Loader2 className="h-6 w-6 mr-2 animate-spin" />
                      Listening...
                    </>
                  ) : (
                    <>
                      <Mic className="h-6 w-6 mr-2" />
                      Voice
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleEmergencyCall}
                  disabled={isLoading}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 text-lg h-auto min-w-[140px]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-6 w-6 mr-2 animate-spin" />
                      Calling...
                    </>
                  ) : (
                    <>
                      <Phone className="h-6 w-6 mr-2" />
                      Emergency
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Energy Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className={`shadow-lg border-2 ${getUsageBgColor(currentUsage)}`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-gray-700">Current Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-5xl font-bold ${getUsageColor(currentUsage)} mb-2`}>{currentUsage}</div>
                <div className="text-xl text-gray-600">kW</div>
                <div className="text-lg text-gray-500 mt-2">
                  {currentUsage < 2 ? "Low Usage" : currentUsage < 3 ? "Moderate" : "High Usage"}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-gray-700">Today's Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">₹{todayCost}</div>
                <div className="flex items-center justify-center gap-2 text-lg">
                  <TrendingDown className="h-5 w-5 text-green-500" />
                  <span className="text-green-600">₹50 saved</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-gray-700">Monthly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-gray-800">{monthlyProgress}%</div>
                <Progress value={monthlyProgress} className="h-4" />
                <div className="text-lg text-gray-600">of monthly budget used</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 shadow-lg border-2 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-gray-700">Savings Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-green-600">{savingsGoal}%</div>
                <Progress value={savingsGoal} className="h-4" />
                <div className="text-lg text-green-700">Great progress!</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Room Controls */}
          <Card className="lg:col-span-2 bg-white shadow-lg border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Room Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {rooms.map((room) => {
                  const IconComponent = room.icon
                  return (
                    <Button
                      key={room.id}
                      onClick={() => toggleRoom(room.id)}
                      className={`h-24 text-lg font-medium transition-all ${
                        room.isActive
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <IconComponent className="h-8 w-8" />
                        <span>{room.name}</span>
                        <span className="text-sm opacity-80">
                          {room.lightsOn}/{room.totalLights} lights
                        </span>
                      </div>
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Temperature & Lighting Controls */}
          <Card className="bg-white shadow-lg border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Climate & Lighting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Temperature Control */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-6 w-6 text-blue-500" />
                  <span className="text-xl font-medium">Temperature</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={() => handleTemperatureChange(-1)}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold w-12 h-12"
                  >
                    -
                  </Button>
                  <div className="text-3xl font-bold text-gray-800 min-w-[80px] text-center">{temperature}°C</div>
                  <Button
                    onClick={() => handleTemperatureChange(1)}
                    className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold w-12 h-12"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Lighting Control */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                  <span className="text-xl font-medium">Brightness</span>
                </div>
                <div className="space-y-2">
                  <Slider value={brightness} onValueChange={setBrightness} max={100} step={1} className="w-full" />
                  <div className="text-center text-lg font-medium text-gray-700">{brightness[0]}%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Major Appliances */}
        <Card className="bg-white shadow-lg border-2">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Major Appliances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {appliances.map((appliance) => {
                const IconComponent = appliance.icon
                return (
                  <div
                    key={appliance.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${appliance.isOn ? "bg-green-100" : "bg-gray-100"}`}>
                        <IconComponent className={`h-8 w-8 ${appliance.isOn ? "text-green-600" : "text-gray-400"}`} />
                      </div>
                      <div>
                        <div className="text-xl font-medium text-gray-800">{appliance.name}</div>
                        <div className={`text-lg ${appliance.isOn ? "text-green-600" : "text-gray-500"}`}>
                          {appliance.status}
                        </div>
                      </div>
                    </div>
                    <Switch
                      checked={appliance.isOn}
                      onCheckedChange={() => toggleAppliance(appliance.id)}
                      className="scale-150"
                    />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Smart Recommendations */}
        <Card className="bg-blue-50 shadow-lg border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Smart Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                <div className="text-lg font-medium text-gray-800 mb-2">Turn off living room TV</div>
                <div className="text-green-600 text-xl font-bold">Save ₹165/day</div>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                <div className="text-lg font-medium text-gray-800 mb-2">Lower AC by 2°C</div>
                <div className="text-green-600 text-xl font-bold">Save ₹120/day</div>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                <div className="text-lg font-medium text-gray-800 mb-2">Unplug phone charger</div>
                <div className="text-green-600 text-xl font-bold">Save ₹25/day</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Family Access */}
        <Card className="bg-white shadow-lg border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-4">
              <Users className="h-8 w-8 text-blue-500" />
              <span className="text-xl text-gray-700">2 family members monitoring your energy usage</span>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
