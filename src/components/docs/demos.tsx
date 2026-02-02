"use client"
import { Accordion } from "@unicorn-ui/ui"
import { Alert, AlertDescription, AlertTitle } from "@unicorn-ui/ui"
import { Avatar, AvatarFallback, AvatarImage } from "@unicorn-ui/ui"
import { Badge } from "@unicorn-ui/ui"
import { Button } from "@unicorn-ui/ui"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@unicorn-ui/ui"
import { Checkbox } from "@unicorn-ui/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@unicorn-ui/ui"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@unicorn-ui/ui"
import { Input } from "@unicorn-ui/ui"
import { Label } from "@unicorn-ui/ui"
import { Progress } from "@unicorn-ui/ui"
import { RadioGroup, RadioGroupItem } from "@unicorn-ui/ui"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@unicorn-ui/ui"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@unicorn-ui/ui"
import { Slider } from "@unicorn-ui/ui"
import { Switch } from "@unicorn-ui/ui"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unicorn-ui/ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@unicorn-ui/ui"
import { Textarea } from "@unicorn-ui/ui"
import { ToastProvider, useToast } from "@unicorn-ui/ui"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@unicorn-ui/ui"
import { BentoCard, BentoGrid } from "@unicorn-ui/ui"
import { Dock, DockIcon } from "@unicorn-ui/ui"
import { ResizablePanel } from "@unicorn-ui/ui"
import { ThreeDCard } from "@unicorn-ui/ui"
import { AnimatedList } from "@unicorn-ui/ui"
import { AvatarCircles } from "@unicorn-ui/ui"
import { FileTree } from "@unicorn-ui/ui"
import { Timeline } from "@unicorn-ui/ui"
import { Sidebar, SidebarItem } from "@unicorn-ui/ui"
import {
  AnimatedGridPattern,
  CollapsibleSidebar,
  CoolMode,
  DotPattern,
  MagicCard,
  Marquee,
  Meteors,
  OrbitingCircles,
  Particles,
  RetroGrid,
  Ripple,
} from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { useState } from "react"

// Hooks
import { useTheme } from "@unicorn-ui/ui"
import { useWindowSize } from "@unicorn-ui/ui"
import { useCopyToClipboard } from "@unicorn-ui/ui"
import { useAsync } from "@unicorn-ui/ui"
import { useClickOutside } from "@unicorn-ui/ui"
import { useMouse } from "@unicorn-ui/ui"

import { useScrollProgress } from "@unicorn-ui/ui"
// Utils
import { InView } from "@unicorn-ui/ui"
import { Home, User } from "lucide-react"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      items={[
        {
          id: "item-1",
          title: "Is it accessible?",
          content: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
          id: "item-2",
          title: "Is it styled?",
          content:
            "Yes. It comes with default styles that matches the other components' aesthetic.",
        },
        {
          id: "item-3",
          title: "Is it animated?",
          content: "Yes. It's animated by default, but you can disable it if you prefer.",
        },
      ]}
    />
  )
}

export function AlertDemo() {
  return (
    <Alert>
      {/* <Terminal className="h-4 w-4" /> */}
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@Unicorn-ui" />
      <AvatarFallback>UI</AvatarFallback>
    </Avatar>
  )
}

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}

export function ButtonDemo() {
  return <Button>Button</Button>
}

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}

export function ProgressDemo() {
  return <Progress value={33} className="w-[60%]" />
}

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  )
}

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </SheetContent>
    </Sheet>
  )
}

export function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
}

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV-002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}

export function ToastDemo() {
  const { addToast } = useToast()
  return (
    <Button
      onClick={() =>
        addToast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }
    >
      Add to calendar
    </Button>
  )
}

// Wrapper for ToastDemo to include provider
export function ToastDemoWrapper() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {[1, 2, 3, 4].map((i) => (
        <BentoCard
          key={i}
          title={`Item ${i}`}
          description="A sleek bento grid item."
          background={
            <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          cta="Learn More"
          href="#"
          Icon={Home}
          name={`Item ${i}`}
        />
      ))}
    </BentoGrid>
  )
}

export function DockDemo() {
  return (
    <div className="relative h-[150px] w-full flex items-center justify-center">
      <Dock className="mb-0">
        <DockIcon>
          <Home className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <User className="h-6 w-6" />
        </DockIcon>
      </Dock>
    </div>
  )
}

export function ResizablePanelDemo() {
  return (
    <div className="h-[300px] w-full border rounded-lg overflow-hidden flex">
      <ResizablePanel minWidth={150} maxWidth={400} className="p-4">
        <span className="font-semibold">Sidebar</span>
      </ResizablePanel>
    </div>
  )
}

export function ThreeDCardDemo() {
  return (
    <div className="flex items-center justify-center p-10">
      <ThreeDCard className="w-full max-w-sm">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl text-neutral-600 dark:text-white">
            Make things float in air
          </h1>
          <p className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
            Hover over this card to unleash the power of CSS perspective
          </p>
          <div className="h-40 w-full bg-blue-500 rounded-xl mt-4 shadow-xl" />
        </div>
      </ThreeDCard>
    </div>
  )
}

export function FileTreeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FileTree
        data={[
          {
            name: "src",
            type: "folder",
            children: [
              { name: "index.ts", type: "file" },
              { name: "styles.css", type: "file" },
              {
                name: "components",
                type: "folder",
                children: [
                  { name: "button.tsx", type: "file" },
                  { name: "input.tsx", type: "file" },
                ],
              },
            ],
          },
          { name: "package.json", type: "file" },
          { name: "README.md", type: "file" },
        ]}
      />
    </div>
  )
}

export function AnimatedListDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedList>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm mb-2 w-64"
          >
            Item {item}
          </div>
        ))}
      </AnimatedList>
    </div>
  )
}

export function TimelineDemo() {
  const data = [
    { title: "2024", content: <p>Built the library</p> },
    { title: "2023", content: <p>Started the project</p> },
  ]
  return <Timeline data={data} />
}

export function SidebarDemo() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className="h-[300px] border rounded-md overflow-hidden flex">
      <Sidebar className="h-full border-r">
        <SidebarItem icon={<Home className="h-5 w-5" />}>Home</SidebarItem>
        <SidebarItem icon={<User className="h-5 w-5" />}>Profile</SidebarItem>
      </Sidebar>
      <div className="flex-1 p-4 bg-white dark:bg-neutral-900">Content goes here</div>
    </div>
  )
}

export function AvatarCirclesDemo() {
  return (
    <AvatarCircles
      avatars={[
        { name: "Shadcn", src: "https://github.com/shadcn.png" },
        { name: "Vercel", src: "https://github.com/vercel.png" },
        { name: "User 3" },
      ]}
    />
  )
}

// --- Hook Demos ---

export function UseThemeDemo() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-col gap-2">
      <p>Current Theme: {theme}</p>
      <div className="flex gap-2">
        <Button onClick={() => setTheme("light")} variant="outline">
          Light
        </Button>
        <Button onClick={() => setTheme("dark")} variant="outline">
          Dark
        </Button>
      </div>
    </div>
  )
}

export function UseWindowSizeDemo() {
  const { width, height } = useWindowSize()
  return (
    <div className="p-4 border rounded bg-muted/50 text-center">
      {width}px x {height}px
    </div>
  )
}

export function UseCopyToClipboardDemo() {
  const [text, setText] = useState("Copy me!")
  const [copied, copy] = useCopyToClipboard()

  return (
    <div className="flex gap-2 max-w-sm">
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => copy(text)}>{copied ? "Copied!" : "Copy"}</Button>
    </div>
  )
}

export function UseAsyncDemo() {
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return "Success! Data loaded."
  }
  const { execute, data, error, loading } = useAsync(fetchData)
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => execute()} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </Button>
      {data && <div className="text-green-500">{data}</div>}
      {error && <div className="text-red-500">Error: {error?.message}</div>}
    </div>
  )
}

export function UseClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div ref={ref} className="bg-background p-8 rounded-lg shadow-xl">
            Click outside to close
          </div>
        </div>
      )}
    </div>
  )
}

export function UseMouseDemo() {
  const { x, y } = useMouse()
  return (
    <div className="p-4 border rounded bg-muted/50 text-center flex flex-col items-center gap-2">
      <p>Move your mouse around</p>
      <div className="flex gap-4">
        {/* Visualizing coordinates without rendering objects directly */}
        <span className="p-2 border rounded">
          X: <motion.span>{x}</motion.span>
        </span>
        <span className="p-2 border rounded">
          Y: <motion.span>{y}</motion.span>
        </span>
      </div>
    </div>
  )
}

export function UseScrollProgressDemo() {
  const { scrollYProgress } = useScrollProgress()
  return (
    <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary"
        style={{ scaleX: scrollYProgress, transformOrigin: 0 }}
      />
    </div>
  )
}

// --- Utils Demos ---

export function InViewDemo() {
  return (
    <div className="h-[200px] overflow-auto border rounded p-4">
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        Scroll down...
      </div>
      <InView>
        <div className="p-6 bg-primary text-primary-foreground rounded-lg shadow-lg text-center">
          I'm in view!
        </div>
      </InView>
      <div className="h-[300px]" />
    </div>
  )
}

export function MeteorsDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span>
    </div>
  )
}

export function ParticlesDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Particles className="absolute inset-0" quantity={100} ease={80} color="#000000" refresh />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span>
    </div>
  )
}

export function MagicCardDemo() {
  return (
    <div className="flex h-[300px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        spotlightColor="#D9D9D955"
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        spotlightColor="#D9D9D955"
      >
        Card
      </MagicCard>
    </div>
  )
}

export function CoolModeDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center py-12">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  )
}

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Orbiting Circles
      </span>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <div className="h-full w-full bg-red-500 rounded-full" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <div className="h-full w-full bg-blue-500 rounded-full" />
      </OrbitingCircles>
    </div>
  )
}

export function CollapsibleSidebarDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <CollapsibleSidebar
        items={[
          { label: "Dashboard", href: "#", icon: <Home className="h-4 w-4" /> },
          { label: "Profile", href: "#", icon: <User className="h-4 w-4" /> },
          { label: "Settings", href: "#" },
        ]}
      />
    </div>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mx-2 h-full w-32 rounded-lg border bg-card p-4">
            Card {i}
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedGridPattern />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Grid Pattern
      </span>
    </div>
  )
}

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <RetroGrid />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Retro Grid
      </span>
    </div>
  )
}

export function RippleDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Ripple
      </p>
      <Ripple />
    </div>
  )
}

export function DotPatternDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="mask-gradient(to_bottom_right,white,transparent,transparent) "
      />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Dot Pattern
      </span>
    </div>
  )
}

export const SplitLayoutDemo = ResizablePanelDemo
