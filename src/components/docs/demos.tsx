"use client"
import {
  // Core
  Accordion,
  Alert,
  AlertDescription,
  AlertTitle,
  // Special/Misc
  AnimatedBeam,
  // Buttons
  AnimatedButton,
  // Interaction
  AnimatedCircularProgressBar,
  // Text
  AnimatedGradientText,
  // Backgrounds
  AnimatedGridPattern,
  AriaLiveRegion,
  // Layout
  AnimatedList,
  AnimatedNumber,
  AnimatedShinyText,
  AnimatedThemeToggler,
  AuroraBackground,
  AuroraText,
  Avatar,
  AvatarCircles,
  AvatarFallback,
  AvatarImage,
  BackgroundBeams,
  Badge,
  BentoCard,
  BentoGrid,
  BlurFade,
  BorderBeam,
  BoxReveal,
  Button,
  CanvasSmudge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardStack,
  CardTitle,
  Checkbox,
  CodeComparison,
  CollapsibleSidebar,
  Combobox,
  ComicText,
  // Feedback
  CommandMenu,
  // Skeletons
  ComponentPageSkeleton,
  Confetti,
  ConfettiSideCannons,
  CoolMode,
  CreepyButton,
  CustomCursor,
  CustomPointer,
  DataTable,
  DatePicker,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dock,
  DockIcon,
  DotPattern,
  DottedMap,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  ExpandableBentoCard,
  FadeIn,
  FadeText,
  FileTree,
  FlickeringGrid,
  FlipText,
  FlipText3D,
  FollowerPointer,
  GlassDock,
  GlitchEffect,
  Globe,
  GlowBorderCard,
  GlowButton,
  GooeyButton,
  GradualSpacing,
  Gravity,
  GridPattern,
  HeroVideoDialog,
  HorizontalScroll,
  HoverRevealCard,
  HyperText,
  IconCloud,
  InView,
  Input,
  InteractiveGridPattern,
  InteractiveHoverButton,
  IonCloud,
  Label,
  Lens,
  LetterPullup,
  LineShadowText,
  MagicCard,
  MagneticButton,
  MagneticWrapper,
  Magnifier,
  Marquee,
  Meteors,
  MorphingText,
  NeonGradientCard,
  NoiseOverlay,
  NumberTicker,
  OrbitingCircles,
  OrbitingDots,
  ParallaxImage,
  ParticleImage,
  Particles,
  PercentLoader,
  PerspectiveMenu,
  PixelImage,
  PixelTrail,
  Pointer,
  Progress,
  ProgressiveBlur,
  PulsatingButton,
  RadioGroup,
  RadioGroupItem,
  RainbowButton,
  ReorderableList,
  ResizablePanel,
  RetroGrid,
  RevealLoader,
  Ripple,
  RippleButton,
  RippleEffect,
  RotateText,
  Safari,
  Scene3D,
  ScrollBasedVelocity,
  ScrollProgress,
  ScrollProgressiveBlur,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SeparateAway,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ShimmerButton,
  ShineBorder,
  ShinyButton,
  ShootingStars,
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  Skeleton,
  Slider,
  SmartInput,
  SmoothCursor,
  Snow,
  SocialFlipButton,
  SparklesText,
  SpinningText,
  Spotlight,
  SpotlightCard,
  SpotlightNew,
  StaggeredGrid,
  Stars,
  StatusIcon,
  StripedPattern,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Terminal,
  TextAnimate,
  TextHighlighter,
  TextReveal,
  Textarea,
  ThemeToggle,
  ThreeDCard,
  Timeline,
  ToastProvider,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TopNav,
  TracingBeam,
  TweetCard,
  type ColumnDef,
  TypingAnimation,
  useAnnouncer,
  useAsync,
  useClickOutside,
  useCopyToClipboard,
  useMouse,
  useScrollProgress,
  // Hooks
  useTheme,
  useToast,
  useWindowSize,
  VelocityScroll,
  VideoText,
  WarpBackground,
  WavyText,
  WordRotate,
  Android,
  Iphone,
  InteractiveBook,
  LightLines,
  LineHoverLink,
  LiquidText,
  LogoSlider,
  Modal,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PerspectiveGrid,
  SmoothScroll,
  StackedLogos,
  TestimonialsCard,
  UnicornThemeProvider,
  cn,
} from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import * as React from "react"
import { useState } from "react"

// Utils
import { Github, Home, Globe as LucideGlobe, Settings, Twitter, User } from "lucide-react"

export function AccordionDemo({ items, ...props }: React.ComponentProps<typeof Accordion>) {
  return (
    <Accordion
      type="single"
      collapsible


      className="w-full"
      {...props}
      items={items || [
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

export function AlertDemo({ children, ...props }: React.ComponentProps<typeof Alert>) {
  return (
    <Alert {...props}>
      {/* <Terminal className="h-4 w-4" /> */}
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}

export function AvatarDemo({
  fallback = "UI",
  ...rest
}: React.ComponentProps<typeof AvatarImage> & { fallback?: string }) {
  return (
    <Avatar>
      <AvatarImage src="https://api.github.com/Shubhjn4357.png" alt="@Unicorn-ui" {...rest} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}

export function BadgeDemo(props: React.ComponentProps<typeof Badge>) {
  return <Badge {...props}>{props.children || "Badge"}</Badge>
}

export function ButtonDemo(props: React.ComponentProps<typeof Button>) {
  return <Button {...props}>{props.children || "Button"}</Button>
}

export function CardDemo({ children, className, ...props }: React.ComponentProps<typeof Card> & { children?: React.ReactNode }) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

export function CheckboxDemo({ id: _id, ...props }: React.ComponentProps<typeof Checkbox>) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...props} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}

export function DialogDemo(props: React.ComponentProps<typeof Dialog>) {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
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
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DropdownMenuDemo(props: React.ComponentProps<typeof DropdownMenu>) {
  return (
    <DropdownMenu {...props}>
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

export function InputDemo({ type: _type, placeholder: _placeholder, ...props }: React.ComponentProps<typeof Input>) {
  return <Input type="email" placeholder="Email" {...props} />
}

export function LabelDemo({ htmlFor: _htmlFor, ...props }: React.ComponentProps<typeof Label>) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" {...props}>Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}

export function ProgressDemo({ className: _className, ...props }: React.ComponentProps<typeof Progress>) {
  return <Progress className="w-[60%]" {...props} />
}

export function RadioGroupDemo({ defaultValue: _defaultValue, ...props }: React.ComponentProps<typeof RadioGroup>) {
  return (
    <RadioGroup defaultValue="option-one" {...props}>
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

export function SelectDemo(props: React.ComponentProps<typeof Select>) {
  return (
    <Select {...props}>
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

export function SheetDemo(props: React.ComponentProps<typeof Sheet>) {
  return (
    <Sheet {...props}>
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

export function SliderDemo({ className: _className, ...props }: React.ComponentProps<typeof Slider>) {
  return <Slider className="w-[60%]" {...props} />
}

export function SwitchDemo({ id: _id, ...props }: React.ComponentProps<typeof Switch>) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...props} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

export function TableDemo(props: React.ComponentProps<typeof Table>) {
  return (
    <Table {...props}>
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

export function TabsDemo(props: React.ComponentProps<typeof Tabs>) {
  return (
    <Tabs defaultValue="account" className="w-[400px]" {...props}>
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

export function TextareaDemo({ placeholder: _placeholder, ...props }: React.ComponentProps<typeof Textarea>) {
  return <Textarea placeholder="Type your message here." {...props} />
}

export function ToastDemo(props: React.ComponentProps<typeof Button>) {
  const { addToast } = useToast()
  return (
    <Button
      {...props}
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
export function ToastDemoWrapper(props: any) {
  return (
    <ToastProvider>
      <ToastDemo {...props} />
    </ToastProvider>
  )
}

export function TooltipDemo(props: React.ComponentProps<typeof Tooltip>) {
  return (
    <TooltipProvider>
      <Tooltip {...props}>
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

export function BentoGridDemo({ className: _className, ...props }: React.ComponentProps<typeof BentoGrid>) {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-auto" {...props}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <BentoCard
          key={i}
          title={`Item ${i}`}
          description="A sleek bento grid item."
          background={
            <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-purple-500 to-pink-600" />
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          cta="Learn More"
          href="https://shubham-jain.vercel.app"
          Icon={Home}
          name={`Item ${i}`}
        />
      ))}
    </BentoGrid>
  )
}

export function DockDemo({ className: _className, ...props }: React.ComponentProps<typeof Dock>) {
  return (
    <div className="relative h-[150px] w-full flex items-center justify-center">
      <Dock className="mb-0" {...props}>
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

export function ResizablePanelDemo({ className: _className, minWidth: _minWidth, maxWidth: _maxWidth, ...props }: React.ComponentProps<typeof ResizablePanel>) {
  return (
    <div className="h-[300px] w-full border rounded-lg overflow-hidden flex">
      <ResizablePanel minWidth={150} maxWidth={400} className="p-4" {...props}>
        <span className="font-semibold">Sidebar</span>
      </ResizablePanel>
    </div>
  )
}

export function ThreeDCardDemo({ className: _className, ...props }: React.ComponentProps<typeof ThreeDCard>) {
  return (
    <div className="flex items-center justify-center p-10">
      <ThreeDCard className="w-full max-w-sm" {...props}>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl text-foreground">Make things float in air</h1>
          <p className="text-muted-foreground">
            Hover over this card to unleash the power of CSS perspective
          </p>
          <div className="h-40 w-full bg-blue-500 rounded-xl mt-4 shadow-xl" />
        </div>
      </ThreeDCard>
    </div>
  )
}

export function FileTreeDemo({ ...props }: React.ComponentProps<typeof FileTree>) {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FileTree
        {...props}

        data={props.data || [
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

export function TimelineDemo({ data: _data, ...props }: React.ComponentProps<typeof Timeline>) {
  const data = [
    { title: "2024", content: <p>Built the library</p> },
    { title: "2023", content: <p>Started the project</p> },
  ]
  return <Timeline data={data} {...props} />
}

export function SidebarDemo({ className: _className, ...props }: React.ComponentProps<typeof Sidebar>) {
  // const [isCollapsed, setIsCollapsed] = useState(false) // Unused variable
  return (
    <div className="h-[300px] border rounded-md overflow-hidden flex">
      <Sidebar className="h-full border-r" {...props}>
        <SidebarItem icon={<Home className="h-5 w-5" />}>Home</SidebarItem>
        <SidebarItem icon={<User className="h-5 w-5" />}>Profile</SidebarItem>
      </Sidebar>
      <div className="flex-1 p-4 bg-background">Content goes here</div>
    </div>
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

export function MeteorsDemo({ number = 30, ...props }: React.ComponentProps<typeof Meteors>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={number} {...props} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span>
    </div>
  )
}

export function ParticlesDemo({ quantity = 100, color = "#000000", ...props }: React.ComponentProps<typeof Particles>) {
  // Use current color if no color prop is passed (or handle dark mode in parent)
  const theme = useTheme()
  const effectiveColor = color === "#000000" && theme.theme === "dark" ? "#ffffff" : color

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Particles
        className="absolute inset-0"
        quantity={quantity}
        ease={80}
        color={effectiveColor}
        refresh
        {...props}
      />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span>
    </div>
  )
}

export function MagicCardDemo(props: React.ComponentProps<typeof MagicCard>) {
  return (
    <div className="flex h-[300px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        {...props}
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        {...props}
      >
        Card
      </MagicCard>
    </div>
  )
}

export function CoolModeDemo(props: React.ComponentProps<typeof CoolMode>) {
  return (
    <div className="relative flex h-full w-full items-center justify-center py-12">
      <CoolMode {...props}>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  )
}

export function OrbitingCirclesDemo(props: React.ComponentProps<typeof OrbitingCircles>) {
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
        {...props}
      >
        <div className="h-full w-full bg-red-500 rounded-full" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
        {...props} // Spread props here too or just the first one? Usually user wants to control the container or one of them.
      >
        <div className="h-full w-full bg-blue-500 rounded-full" />
      </OrbitingCircles>
    </div>
  )
}

export function CollapsibleSidebarDemo(props: React.ComponentProps<typeof CollapsibleSidebar>) {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <CollapsibleSidebar className="w-full h-full border-none" {...props}>
        <SidebarHeader className="px-4 py-4">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-6 w-6 rounded-md bg-primary" />
            <span>Unicorn</span>
          </div>
        </SidebarHeader>
        <SidebarSection title="Main">
          <SidebarItem icon={<Home className="h-4 w-4" />}>Dashboard</SidebarItem>
          <SidebarItem icon={<User className="h-4 w-4" />}>Profile</SidebarItem>
        </SidebarSection>
        <SidebarSection title="Settings">
          <SidebarItem icon={<Settings className="h-4 w-4" />}>General</SidebarItem>
        </SidebarSection>
      </CollapsibleSidebar>
    </div>
  )
}

export function MarqueeDemo(props: React.ComponentProps<typeof Marquee>) {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]" {...props}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mx-2 h-full w-32 rounded-lg border bg-card p-4">
            Card {i}
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export function AnimatedGridPatternDemo(props: React.ComponentProps<typeof AnimatedGridPattern>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedGridPattern {...props} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Grid Pattern
      </span>
    </div>
  )
}

export function RetroGridDemo(props: React.ComponentProps<typeof RetroGrid>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <RetroGrid {...props} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Retro Grid
      </span>
    </div>
  )
}

export function RippleDemo(props: React.ComponentProps<typeof Ripple>) {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Ripple
      </p>
      <Ripple {...props} />
    </div>
  )
}

export const SplitLayoutDemo = ResizablePanelDemo

export function AnimatedNumberDemo(props: Omit<React.ComponentProps<typeof AnimatedNumber>, "format">) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedNumber {...props} value={100} />
    </div>
  )
}

export function AuroraTextDemo(props: React.ComponentProps<typeof AuroraText>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AuroraText {...props}>Aurora Text</AuroraText>
    </div>
  )
}

export function AnimatedShinyTextDemo(props: React.ComponentProps<typeof AnimatedShinyText>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedShinyText {...props}>Shiny Text</AnimatedShinyText>
    </div>
  )
}

export function LineShadowTextDemo(props: React.ComponentProps<typeof LineShadowText>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <LineShadowText shadowColor="black" {...props}>
        Line Shadow
      </LineShadowText>
    </div>
  )
}

export function VideoTextDemo(props: React.ComponentProps<typeof VideoText>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <VideoText
        {...props}
        text="VIDEO"
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  )
}

export function ScrollBasedVelocityDemo(props: React.ComponentProps<typeof ScrollBasedVelocity>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <ScrollBasedVelocity  {...props} text="Scroll Velocity" />
    </div>
  )
}

export function BlurFadeDemo(props: React.ComponentProps<typeof BlurFade>) {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl p-4">
      <BlurFade delay={0.25} {...props}>
        <span className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Blur Fade
        </span>
      </BlurFade>
    </div>
  )
}

export function MorphingTextDemo(props: React.ComponentProps<typeof MorphingText>) {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <MorphingText  {...props} texts={["Morphing", "Text", "Animation"]} />
    </div>
  )
}

export function NumberTickerDemo(props: React.ComponentProps<typeof NumberTicker>) {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-foreground">
        <NumberTicker  {...props} value={100} />
      </p>
    </div>
  )
}

export function SparklesTextDemo(props: React.ComponentProps<typeof SparklesText>) {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <SparklesText  {...props} text="Sparkles Text" />
    </div>
  )
}

export function TypingAnimationDemo(props: React.ComponentProps<typeof TypingAnimation>) {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <TypingAnimation
        {...props}
        className="text-4xl font-bold text-foreground"
        text="Typing Animation"
      />
    </div>
  )
}

export function LetterPullupDemo(props: React.ComponentProps<typeof LetterPullup>) {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <LetterPullup  {...props} delay={0.05} text="Letter Pull Up" />
    </div>
  )
}

export function WordRotateDemo(props: React.ComponentProps<typeof WordRotate>) {
  return (
    <div className="h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl">
      <WordRotate {...props} words={["Rotate", "Words", "Animation"]} />
    </div>
  )
}

export function AuroraBackgroundDemo({ children, ...props }: React.ComponentProps<typeof AuroraBackground>) {
  return (
    <div className="h-[300px] w-full overflow-hidden rounded-lg border md:shadow-xl relative">
      <AuroraBackground {...props}>
        <div className="relative flex flex-col items-center justify-center gap-4 px-4">
          <div className="text-3xl font-bold text-forground md:text-7xl">Aurora</div>
        </div>
      </AuroraBackground>
    </div>
  )
}

export function GridPatternDemo({ width: _width, height: _height, x: _x, y: _y, strokeDasharray: _sda, className: _className, ...props }: React.ComponentProps<typeof GridPattern>) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg border bg-background md:shadow-xl flex items-center justify-center">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Grid Pattern
      </p>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]")}
        {...props}
      />
    </div>
  )
}

export function ShootingStarsDemo(props: React.ComponentProps<typeof ShootingStars>) {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl ">
      <h2 className="relative z-10 text-3xl font-bold text-center text-white md:text-5xl">
        Shooting Stars
      </h2>
      <ShootingStars {...props} />
      <Stars />
    </div>
  )
}

export function StarsDemo(props: React.ComponentProps<typeof Stars>) {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl ">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Stars
      </span>
      <Stars {...props} />
    </div>
  )
}

export function VelocityScrollDemo({ text: _text, defaultVelocity: _defVel, className: _className, ...props }: React.ComponentProps<typeof VelocityScroll>) {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <VelocityScroll
        text="Velocity Scroll"
        defaultVelocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-foreground drop-shadow-sm md:text-7xl md:leading-20"
        {...props}
      />
    </div>
  )
}

export function HyperTextDemo({ text: _text, ...props }: React.ComponentProps<typeof HyperText>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <HyperText text="Hyper Text" {...props} />
    </div>
  )
}

export function FadeTextDemo({ text: _text, direction: _direction, ...props }: React.ComponentProps<typeof FadeText>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FadeText text="Fade Text" direction="up" {...props} />
    </div>
  )
}

export function FlipTextDemo({ text: _text, ...props }: React.ComponentProps<typeof FlipText>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FlipText text="Flip Text" {...props} />
    </div>
  )
}

export function AnimatedGradientTextDemo({ children, ...props }: React.ComponentProps<typeof AnimatedGradientText>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedGradientText {...props}>
        <span className="inline animate-gradient bg-linear-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent">
          Animated Gradient Text
        </span>
      </AnimatedGradientText>
    </div>
  )
}

export function StripedPatternDemo({ className: _className, ...props }: React.ComponentProps<typeof StripedPattern>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <StripedPattern className="opacity-50" {...props} />
      <p className="z-10 text-5xl font-medium tracking-tighter text-black dark:text-white">
        Striped Pattern
      </p>
    </div>
  )
}

export function WarpBackgroundDemo(props: React.ComponentProps<typeof WarpBackground>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <WarpBackground {...props} />
      <Card className="z-50 w-80">
        <CardHeader>
          <CardTitle>Warp Background</CardTitle>
          <CardDescription>A background that warps the grid behind it.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export function InteractiveGridPatternDemo(
  props: React.ComponentProps<typeof InteractiveGridPattern>
) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <InteractiveGridPattern {...props} />
      <p className="z-10 text-5xl font-medium tracking-tighter text-black dark:text-white">
        Interactive Grid
      </p>
    </div>
  )
}

export function FlickeringGridDemo(props: React.ComponentProps<typeof FlickeringGrid>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <FlickeringGrid {...props} />
      <p className="z-10 text-5xl font-medium tracking-tighter text-black dark:text-white">
        Flickering Grid
      </p>
    </div>
  )
}

// --- New Button Demos ---

export function ShimmerButtonDemo({ className: _className, children, ...props }: React.ComponentProps<typeof ShimmerButton>) {
  return (
    <div className="z-10 flex h-80 items-center justify-center">
      <ShimmerButton className="shadow-2xl" {...props}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Shimmer Button
        </span>
      </ShimmerButton>
    </div>
  )
}

export function RainbowButtonDemo({ children, ...props }: React.ComponentProps<typeof RainbowButton>) {
  return <RainbowButton {...props}>Get Unlimited Access</RainbowButton>
}

export function GlowButtonDemo({ children, ...props }: React.ComponentProps<typeof GlowButton>) {
  return <GlowButton {...props}>Glow Button</GlowButton>
}

export function RippleButtonDemo({ children, ...props }: React.ComponentProps<typeof RippleButton>) {
  return (
    <div className="flex items-center justify-center h-full">
      <RippleButton {...props}>Ripple Button</RippleButton>
    </div>
  )
}

export function MagneticButtonDemo({ children, ...props }: React.ComponentProps<typeof MagneticButton>) {
  return <MagneticButton {...props}>Magnetic Button</MagneticButton>
}

export function PulsatingButtonDemo({ children, ...props }: React.ComponentProps<typeof PulsatingButton>) {
  return <PulsatingButton {...props}>Pulsating Button</PulsatingButton>
}

export function ShinyButtonDemo({ children, ...props }: React.ComponentProps<typeof ShinyButton>) {
  return <ShinyButton {...props}>Shiny Button</ShinyButton>
}

export function AnimatedButtonDemo({ children, ...props }: React.ComponentProps<typeof AnimatedButton>) {
  return <AnimatedButton {...props}>Animated Button</AnimatedButton>
}

export function GooeyButtonDemo({ children, ...props }: React.ComponentProps<typeof GooeyButton>) {
  return <GooeyButton {...props}>Gooey Button</GooeyButton>
}

export function InteractiveHoverButtonDemo({
  text = "Hover Me",
  ...props
}: { text?: string } & React.ComponentProps<typeof InteractiveHoverButton>) {
  return <InteractiveHoverButton {...props}>{text}</InteractiveHoverButton>
}

export function CreepyButtonDemo({ children, ...props }: React.ComponentProps<typeof CreepyButton>) {
  return <CreepyButton {...props}>Creepy Button</CreepyButton>
}

export function SocialFlipButtonDemo({ href: _href, icon: _icon, children, ...props }: React.ComponentProps<typeof SocialFlipButton>) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-80">
      <SocialFlipButton href="" icon={<Github />} {...props}>
        Follow @unicorn-ui
      </SocialFlipButton>
      <SocialFlipButton href="" icon={<Twitter />} {...props}>
        Follow @unicorn_ui
      </SocialFlipButton>
    </div>
  )
}

// --- Special Effects Demos ---

export function ConfettiDemo(props: React.ComponentProps<typeof Confetti>) {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Confetti
      </span>
      <Confetti {...props} />
    </div>
  )
}

export function ConfettiSideCannonsDemo(
  props: React.ComponentProps<typeof ConfettiSideCannons>
) {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <ConfettiSideCannons {...props} />
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Cannons
      </span>
    </div>
  )
}

export function SpotlightDemo({ className: _className, ...props }: React.ComponentProps<typeof Spotlight>) {
  return (
    <div className="h-80 w-full rounded-md flex md:items-center md:justify-center bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" {...props} />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
      </div>
    </div>
  )
}

export function BorderBeamDemo({ size: _size, duration: _duration, delay: _delay, ...props }: React.ComponentProps<typeof BorderBeam>) {
  return (
    <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Border Beam
      </span>
      <BorderBeam size={250} duration={12} delay={9} {...props} />
    </div>
  )
}

export function ShineBorderDemo({ className: _className, color: _color, children, ...props }: React.ComponentProps<typeof ShineBorder>) {
  return (
    <div className="flex items-center justify-center h-[200px]">
      <ShineBorder
        className="text-center text-2xl font-bold capitalize"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        {...props}
      >
        Shine Border
      </ShineBorder>
    </div>
  )
}

export function RippleEffectDemo(props: React.ComponentProps<typeof RippleEffect>) {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <RippleEffect {...props} />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Ripple Effect
      </p>
    </div>
  )
}

export function GlitchEffectDemo() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center">
      <GlitchEffect text="GLITCH" />
    </div>
  )
}

export function CanvasSmudgeDemo(props: React.ComponentProps<typeof CanvasSmudge>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <CanvasSmudge {...props} />
      <p className="pointer-events-none z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Smudge
      </p>
    </div>
  )
}

export function Scene3DDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg border">
      <Scene3D />
    </div>
  )
}

export function GravityDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Gravity
        items={[
          <div key="1" className="text-4xl font-bold bg-white p-4 rounded-xl text-black">
            Gravity
          </div>,
          <div key="2" className="text-2xl font-bold bg-white p-2 rounded-xl text-black">
            Physics
          </div>,
          <div key="3" className="text-xl font-bold bg-white p-2 rounded-xl text-black">
            Matter
          </div>,
        ]}
      />
    </div>
  )
}

// --- Background Demos ---

// StarsDemo dupe removed

export function DotPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]")}
      />
    </div>
  )
}

// StripedPatternDemo dupe removed

// WarpBackgroundDemo dupe removed

// FlickeringGridDemo dupe removed

export function BackgroundBeamsDemo(props: React.ComponentProps<typeof BackgroundBeams>) {
  return (
    <div className="h-80 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Background Beams
        </h1>
      </div>
      <BackgroundBeams {...props} />
    </div>
  )
}

export function OrbitingDotsDemo(props: React.ComponentProps<typeof OrbitingDots>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <OrbitingDots {...props} />
    </div>
  )
}

export function SnowDemo(props: React.ComponentProps<typeof Snow>) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-slate-950 md:shadow-xl">
      <Snow {...props} />
      <p className="z-10 text-5xl font-medium tracking-tighter text-white">Let it Snow</p>
    </div>
  )
}

export function HoverRevealCardDemo() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <HoverRevealCard
        title="Hover me"
        subtitle="I reveal secret content when you hover over me."
        image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      >
        <h2 className="text-2xl font-bold">Secret Content Revealed!</h2>
      </HoverRevealCard>
    </div>
  )
}

export function MagneticWrapperDemo(props: React.ComponentProps<typeof MagneticWrapper>) {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <MagneticWrapper {...props}>
        <Button>Magnetic Wrapper</Button>
      </MagneticWrapper>
    </div>
  )
}

export function NeonGradientCardDemo() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <NeonGradientCard className="items-center justify-center text-center">
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-linear-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Neon Gradient
        </span>
      </NeonGradientCard>
    </div>
  )
}

export function MagnifierDemo() {
  return (
    <div className="relative flex h-75 w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Magnifier imgSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" />
    </div>
  )
}

export function ParticleImageDemo() {
  return (
    <div className="relative flex h-75 w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <ParticleImage src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop" />
    </div>
  )
}

export function SpotlightNewDemo() {
  return (
    <div className="relative flex h-75 w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <SpotlightNew />
      <p className="z-10 text-5xl font-medium tracking-tighter text-foreground">Spotlight New</p>
    </div>
  )
}

export function AvatarCirclesDemo() {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <AvatarCircles
        avatars={[
          {
            name: "User 1",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
          },
          {
            name: "User 2",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          },
          {
            name: "User 3",
            src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
          },
          {
            name: "User 4",
            src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
          },
          {
            name: "User 5",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
          },
        ]}
      />
    </div>
  )
}

export function AnimatedBeamDemo({
  curvature = 20,
  pathColor = "var(--primary)",
  pathWidth = 2,
  pathOpacity = 0.2,
  duration = 3,
  ...props
}: React.ComponentProps<typeof AnimatedBeam>) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const fromRef = React.useRef<HTMLDivElement>(null)
  const toRef = React.useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-10"
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <div
            ref={fromRef}
            className="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <User className="h-6 w-6 text-background" />
          </div>
          <div
            ref={toRef}
            className="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <Globe className="h-6 w-6 text-background" />
          </div>
        </div>
      </div>
      <AnimatedBeam
        {...props}
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={fromRef as React.RefObject<HTMLElement>}
        toRef={toRef as React.RefObject<HTMLElement>}
        curvature={curvature}
        pathColor={pathColor}
        pathWidth={pathWidth}
        pathOpacity={pathOpacity}
        duration={duration}
      />
    </div>
  )
}

export function BoxRevealDemo({
  boxColor = "var(--primary)",
  duration = 0.5,
  width = "fit-content",
  children = "Box Reveal Animation",
  ...props
}: React.ComponentProps<typeof BoxReveal>) {
  return (
    <div className="h-full w-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={boxColor} duration={duration} width={width as any} {...props}>
        <p className="text-[3.5rem] font-semibold">
          Unicorn UI<span className="text-(--primary)">.</span>
        </p>
      </BoxReveal>
      <BoxReveal boxColor={boxColor} duration={duration} width={width as any} {...props}>
        <h2 className="mt-[.5rem] text-[1rem]">{children}</h2>
      </BoxReveal>
    </div>
  )
}

export function ComicTextDemo({
  children = "Comic Text",
  ...props
}: React.ComponentProps<typeof ComicText>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <ComicText className="text-6xl" {...props}>
        {children}
      </ComicText>
    </div>
  )
}

export function FlipText3DDemo({
  children = "Flip Text 3D",
  ...props
}: React.ComponentProps<typeof FlipText3D>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <FlipText3D className="text-6xl font-black" {...props}>
        {children}
      </FlipText3D>
    </div>
  )
}

export function GradualSpacingDemo({
  text = "Gradual Spacing",
  ...props
}: React.ComponentProps<typeof GradualSpacing>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <GradualSpacing text={text} className="text-4xl font-bold tracking-tighter" {...props} />
    </div>
  )
}

export function RotateTextDemo({
  words = ["Rotate", "Text", "Animation"],
  ...props
}: React.ComponentProps<typeof RotateText>) {
  return (
    <div className="flex h-40 w-full items-center justify-center text-4xl font-bold">
      <span className="mr-2">I am</span>
      <RotateText words={words} className="text-primary" {...props} />
    </div>
  )
}

export function SeparateAwayDemo({
  upperText = "Separate",
  lowerText = "Away",
  ...props
}: React.ComponentProps<typeof SeparateAway>) {
  return (
    <div className="flex h-60 w-full items-center justify-center">
      <SeparateAway
        upperText={upperText}
        lowerText={lowerText}
        className="text-8xl font-black"
        {...props}
      >
        <div className="text-2xl font-bold text-primary">REVEALED</div>
      </SeparateAway>
    </div>
  )
}

export function SpinningTextDemo({
  children = "SPINNING TEXT • ",
  ...props
}: React.ComponentProps<typeof SpinningText>) {
  return (
    <div className="flex h-60 w-full items-center justify-center">
      <SpinningText className="text-xl font-bold" {...props}>
        {children}
      </SpinningText>
    </div>
  )
}

export function TextAnimateDemo({
  text = "Text Animate",
  ...props
}: React.ComponentProps<typeof TextAnimate>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <TextAnimate text={text} className="text-5xl font-bold" {...props} />
    </div>
  )
}

export function TextRevealDemo({ text, className, ...props }: React.ComponentProps<typeof TextReveal>) {
  return (
    <div className="h-100 w-full overflow-auto border rounded-lg p-4 bg-background">
      <div className="h-50 flex items-center justify-center text-muted-foreground">
        Scroll down to reveal...
      </div>
      <TextReveal {...props} text={text} className={cn("text-6xl font-bold py-20", className)} />
      <div className="h-[300px]" />
    </div>
  )
}

export function WavyTextDemo({
  text = "Wavy Text",
  className,
  ...props
}: React.ComponentProps<typeof WavyText>) {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <WavyText text={text} className={cn("text-5xl font-bold", className)} {...props} />
    </div>
  )
}

export function TextHighlighterDemo({
  text = "This is a text highlighter demo highlighting important words.",
  highlight = "highlighter",
  className,
  highlightClassName,
  ...props
}: React.ComponentProps<typeof TextHighlighter>) {
  return (
    <div className="flex h-40 w-full items-center justify-center px-10">
      <TextHighlighter
        text={text}
        highlight={highlight}
        className={cn("text-2xl font-medium leading-relaxed", className)}
        highlightClassName={cn("bg-yellow-200 dark:bg-yellow-800 rounded px-1", highlightClassName)}
        {...props}
      />
    </div>
  )
}

export function StatusIconDemo({ status, ...props }: React.ComponentProps<typeof StatusIcon>) {
  return (
    <div className="flex items-center justify-center p-8">
      <StatusIcon status={status || "success"} {...props} />
    </div>
  )
}

// --- Feedback Demos ---

export function SkeletonDemo({ className, ...props }: React.ComponentProps<typeof Skeleton>) {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className={cn("h-12 w-12 rounded-full", className)} {...props} />
      <div className="space-y-2">
        <Skeleton className={cn("h-4 w-62.5", className)} {...props} />
        <Skeleton className="h-4 w-50" {...props} />
      </div>
    </div>
  )
}

export function ThemeToggleDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <ThemeToggle />
    </div>
  )
}

export function CommandMenuDemo() {
  return (
    <div className="flex items-center justify-center p-8 text-sm text-muted-foreground">
      Press{" "}
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>J
      </kbd>{" "}
      to open command menu
      <CommandMenu />
    </div>
  )
}

export function PercentLoaderDemo(props: React.ComponentProps<typeof PercentLoader>) {
  return (
    <div className="flex items-center justify-center p-8">
      <PercentLoader {...props} />
    </div>
  )
}

export function RevealLoaderDemo({ children, ...props }: React.ComponentProps<typeof RevealLoader>) {
  return (
    <div className="flex items-center justify-center p-8">
      <RevealLoader  {...props} >{children || "loading..."}</RevealLoader>
    </div>
  )
}

export function SmartInputDemo({ placeholder, ...props }: React.ComponentProps<typeof SmartInput>) {
  return (
    <div className="flex w-full max-w-sm items-center justify-center p-8">
      <SmartInput placeholder={placeholder || "Type something smart..."} {...props} />
    </div>
  )
}

// --- Special & Misc Demos ---

export function NoiseOverlayDemo(props: React.ComponentProps<typeof NoiseOverlay>) {
  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg border bg-card p-8">
      <p className="z-10 text-xl font-bold">Noise Overlay</p>
      <NoiseOverlay {...props} />
    </div>
  )
}

export function ParallaxImageDemo({ src, alt, ...props }: React.ComponentProps<typeof ParallaxImage>) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg">
      <ParallaxImage
        src={src || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80"}
        alt={alt || "Parallax"}
        {...props}
      />
    </div>
  )
}

export function AnimatedCircularProgressBarDemo({ max, value, gaugePrimaryColor, gaugeSecondaryColor, ...props }: React.ComponentProps<typeof AnimatedCircularProgressBar>) {
  return (
    <div className="flex items-center justify-center p-8">
      <AnimatedCircularProgressBar
        {...props}
        max={max || 100}
        value={value || 66}
        gaugePrimaryColor={gaugePrimaryColor || "var(--primary)"}
        gaugeSecondaryColor={gaugeSecondaryColor || "var(--muted-color)"}
      />
    </div>
  )
}

// --- Layout Demos ---

export function AnimatedListDemo({ children, ...props }: React.ComponentProps<typeof AnimatedList>) {
  return (
    <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-lg flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
      <AnimatedList {...props}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className="mb-4 flex items-center space-x-4 rounded-md border p-4 shadow-sm"
          >
            <div className="h-10 w-10 rounded-full bg-primary/20" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Notification {idx + 1}</p>
              <p className="text-sm text-muted-foreground">Something happened in the system.</p>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  )
}

export function ExpandableBentoCardDemo({ title: _title, description: _description, ...props }: React.ComponentProps<typeof ExpandableBentoCard>) {
  return (
    <div className="h-[500px] w-full max-w-3xl">
      <ExpandableBentoCard title="Expandable Card" description="Click to expand" {...props} />
    </div>
  )
}

export function GlassDockDemo({ items, ...props }: React.ComponentProps<typeof GlassDock>) {
  return (
    <div className="relative h-[300px] w-full flex items-end justify-center pb-12 bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden">
      <GlassDock
        items={items || [
          { label: "Home", icon: <div>🏠</div>, href: "#" },
          { label: "Products", icon: <div>🛍️</div>, href: "#" },
          { label: "Settings", icon: <div>⚙️</div>, href: "#" },
        ]}
        {...props}
      />
    </div>
  )
}

export function GlobeDemo(props: React.ComponentProps<typeof Globe>) {
  return (
    <div className="relative flex h-full w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>
      <Globe className="top-28" {...props} />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  )
}

export function GlowBorderCardDemo({ className, children, ...props }: React.ComponentProps<typeof GlowBorderCard>) {
  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <GlowBorderCard className={cn("flex flex-col items-center justify-center p-4", className)} {...props}>
        <span className="text-xl font-bold">Glow Border</span>
        <span className="text-xs text-muted-foreground">Hover to see magic</span>
      </GlowBorderCard>
    </div>
  )
}

export function HorizontalScrollDemo({ children, ...props }: React.ComponentProps<typeof HorizontalScroll>) {
  return (
    <HorizontalScroll {...props}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex h-40 w-60 shrink-0 items-center justify-center rounded-lg border bg-card shadow-sm mx-2"
        >
          <span className="font-semibold">Item {i + 1}</span>
        </div>
      ))}
    </HorizontalScroll>
  )
}

export function IconCloudDemo({ icons, ...props }: React.ComponentProps<typeof IconCloud>) {
  const iconsList = icons || [
    <span key="1" className="text-4xl">
      ⚛️
    </span>,
    <span key="2" className="text-4xl">
      💻
    </span>,
    <span key="3" className="text-4xl">
      🚀
    </span>,
    <span key="4" className="text-4xl">
      🎨
    </span>,
    <span key="5" className="text-4xl">
      🔧
    </span>,
    <span key="6" className="text-4xl">
      📱
    </span>,
    <span key="7" className="text-4xl">
      🌐
    </span>,
    <span key="8" className="text-4xl">
      🔥
    </span>,
    <span key="9" className="text-4xl">
      ⚡
    </span>,
    <span key="10" className="text-4xl">
      🌈
    </span>,
  ]
  return (
    <div className="relative flex h-full w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud icons={iconsList} {...props} />
    </div>
  )
}

export function LensDemo({ children, ...props }: React.ComponentProps<typeof Lens>) {
  return (
    <div className="flex items-center justify-center p-20 bg-slate-50 dark:bg-slate-900 rounded-lg">
      <Lens {...props}>
        <img
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop"
          alt="Lens Demo"
          className="rounded-2xl w-64 h-64 object-cover"
        />
      </Lens>
    </div>
  )
}

export function PerspectiveMenuDemo({ items, ...props }: Omit<React.ComponentProps<typeof PerspectiveMenu>, "isOpen" | "onMenuToggle">) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  return (
    <div className="relative flex items-center justify-center p-20 bg-slate-950 rounded-lg h-[400px]">
      <button
        onClick={() => setIsDemoOpen(true)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md z-10"
      >
        Open Menu
      </button>
      <PerspectiveMenu
        isOpen={isDemoOpen}
        onMenuToggle={() => setIsDemoOpen(false)}
        items={[
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "Work", href: "#" },
          { label: "Contact", href: "#" },
        ]}
        {...props}
      />
    </div>
  )
}

export function ImagePixelDemo({ src: _src, ...props }: React.ComponentProps<typeof PixelImage>) {
  return (
    <div className="flex items-center justify-center p-8 bg-black">
      <PixelImage src="/placeholder.png" {...props} />
    </div>
  )
}

export function CardStackDemo({ items: _items, ...props }: React.ComponentProps<typeof CardStack>) {
  return (
    <div className="flex h-60 items-center justify-center w-full">
      <CardStack
        items={[
          { id: 1, name: "Card 1", content: <p>Review the design mocks</p> },
          { id: 2, name: "Card 2", content: <p>Implement the feature</p> },
          { id: 3, name: "Card 3", content: <p>Plan the next sprint</p> },
        ]}
        {...props}
      />
    </div>
  )
}


export function TweetCardDemo({ id, ...props }: React.ComponentProps<typeof TweetCard>) {
  return (
    <div className="flex items-center justify-center p-8 bg-background">
      <TweetCard {...props} id={id || "1668466632709664771"} />
    </div>
  )
}

export function DottedMapDemo(props: React.ComponentProps<typeof DottedMap>) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <DottedMap {...props} />
    </div>
  )
}

export function AnimatedThemeTogglerDemo(
  props: React.ComponentProps<typeof AnimatedThemeToggler>
) {
  return (
    <div className="flex items-center justify-center p-8">
      <AnimatedThemeToggler {...props} />
    </div>
  )
}

export function FadeInDemo({ children, ...props }: React.ComponentProps<typeof FadeIn>) {
  return (
    <div className="flex items-center justify-center p-8 bg-background">
      <FadeIn {...props}>
        <div className="text-4xl font-bold">Fade In Animation</div>
      </FadeIn>
    </div>
  )
}

export function CodeComparisonDemo({ beforeCode: _bc, afterCode: _ac, language: _lang, filename: _fn, ...props }: React.ComponentProps<typeof CodeComparison>) {
  return (
    <div className="flex items-center justify-center p-8 bg-background w-full">
      <CodeComparison
        beforeCode="console.log('Hello World')"
        afterCode="console.log('Hello Unicorn UI')"
        language="typescript"
        filename="example.ts"
        {...props}
      />
    </div>
  )
}

export function ScrollProgressDemo({ className: _className, ...props }: React.ComponentProps<typeof ScrollProgress>) {
  return (
    <div className="relative w-full h-96 overflow-y-scroll bg-background border rounded-lg">
      <ScrollProgress className="top-0" {...props} />
      <div className="h-[1000px] p-8">
        <p>Scroll down to see progress...</p>
      </div>
    </div>
  )
}

export function SafariDemo({ src: _src, className: _className, ...props }: React.ComponentProps<typeof Safari>) {
  return (
    <div className="flex items-center justify-center p-8">
      <Safari src="https://ui.shadcn.com" className="size-full" {...props} />
    </div>
  )
}

export function CustomCursorDemo(props: React.ComponentProps<typeof CustomCursor>) {
  return (
    <div className="relative h-[300px] w-full bg-background border rounded-lg flex items-center justify-center overflow-hidden">
      <CustomCursor {...props} />
      <p>Hover here to see custom cursor</p>
    </div>
  )
}

export function StaggeredGridDemo({ columns: _columns, gap: _gap, className: _className, children: _children, ...props }: React.ComponentProps<typeof StaggeredGrid>) {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <StaggeredGrid columns={4} gap="1rem" className="p-4" {...props}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-40 w-full rounded-lg bg-primary/10 border flex items-center justify-center"
          >
            Item {i + 1}
          </div>
        ))}
      </StaggeredGrid>
    </div>
  )
}

// --- New Demos ---

export function PointerDemo({
  name = "Pointer",
  color = "#FF3366",
  ...props
}: React.ComponentProps<typeof Pointer>) {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
      <Pointer name={name} color={color} {...props} />
      <div className="absolute bottom-4 text-sm text-gray-500">
        Move your cursor to see the effect
      </div>
    </div>
  )
}

export function ProgressiveBlurDemo({
  direction = "bottom",
  blurIntensity = 10,
  className: _className,
  ...props
}: React.ComponentProps<typeof ProgressiveBlur>) {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
      <ProgressiveBlur
        {...props}
        direction={direction}
        blurIntensity={blurIntensity}
        className="absolute inset-0"
      />
      <span className="z-10 text-4xl font-bold text-foreground drop-shadow-md">Progressive Blur</span>
    </div>
  )
}

export function ReorderableListDemo({
  items = ["Item 1", "Item 2", "Item 3"],
  ...props
}: Omit<React.ComponentProps<typeof ReorderableList>, "setItems">) {
  const [listItems, setListItems] = useState(items)
  return (
    <div className="flex items-center justify-center p-8 bg-background">
      <ReorderableList  {...props} items={listItems} setItems={setListItems} />
    </div>
  )
}

export function SmoothCursorDemo({
  texture,
  ...props
}: React.ComponentProps<typeof SmoothCursor>) {
  return (
    <div className="relative h-75 w-full bg-background border rounded-lg flex items-center justify-center overflow-hidden cursor-none">
      <SmoothCursor texture={texture} {...props} />
      <p>Move your mouse (Smooth Cursor)</p>
    </div>
  )
}

export function SpotlightCardDemo({
  spotlightColor = "rgba(var(--primary), 0.15)",
  className: _className,
  ...props
}: React.ComponentProps<typeof SpotlightCard>) {
  return (
    <div className="flex h-60 w-full items-center justify-center">
      <SpotlightCard spotlightColor={spotlightColor} className="max-w-sm" {...props}>
        <div className="p-6">
          <h3 className="text-xl font-bold">Spotlight Card</h3>
          <p className="mt-2 text-muted-foreground">
            Hover over this card to see the spotlight effect.
          </p>
        </div>
      </SpotlightCard>
    </div>
  )
}

export function TopNavDemo({
  brandName = "Unicorn UI",
  showThemeToggle = true,
  links: _links,
  ...props
}: React.ComponentProps<typeof TopNav>) {
  return (
    <div className="h-75 w-full bg-background border rounded-lg relative overflow-hidden flex flex-col">
      <TopNav
        brandName={brandName}
        showThemeToggle={showThemeToggle}
        links={[
          { label: "Home", href: "#" },
          { label: "Docs", href: "#" },
          { label: "Components", href: "#" },
        ]}
        {...props}
      />
      <div className="flex-1 flex items-center justify-center">
        <p>Content</p>
      </div>
    </div>
  )
}

export function TracingBeamDemo({ className: _className, children, ...props }: React.ComponentProps<typeof TracingBeam>) {
  return (
    <div className="h-100 w-full overflow-y-auto bg-background border rounded-lg p-4 relative">
      <TracingBeam className="pl-6" {...props}>
        <div className="space-y-8 pt-4">
          <div>
            <h3 className="text-xl font-bold">Chapter 1</h3>
            <p className="mt-2 text-muted-foreground">Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Chapter 2</h3>
            <p className="mt-2 text-muted-foreground">Consectetur adipiscing elit...</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Chapter 3</h3>
            <p className="mt-2 text-muted-foreground">Sed do eiusmod tempor incididunt...</p>
          </div>
        </div>
      </TracingBeam>
    </div>
  )
}

export function CustomPointerDemo({
  cursorSize = 20,
  cursorColor = "#6366f1",
  trailLength = 5,
  ...props
}: React.ComponentProps<typeof CustomPointer>) {
  return (
    <div className="relative h-75 w-full bg-background border rounded-lg flex items-center justify-center overflow-hidden">
      <CustomPointer
        cursorSize={cursorSize}
        cursorColor={cursorColor}
        trailLength={trailLength}
        {...props}
      />
      <p>Hover here (Custom Pointer)</p>
    </div>
  )
}

export function FollowerPointerDemo({ cardContent: _cc, children, ...props }: React.ComponentProps<typeof FollowerPointer>) {
  return (
    <div className="relative h-75 w-full bg-background border rounded-lg flex items-center justify-center overflow-hidden">
      <FollowerPointer
        cardContent={
          <div className="flex gap-2 items-center">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-xs font-bold text-primary-foreground">Following</span>
          </div>
        }
        {...props}
      >
        <div className="h-40 w-60 rounded-xl bg-linear-to-tr from-pink-300 to-blue-300 flex items-center justify-center">
          <p className="font-bold text-white">Hover Me</p>
        </div>
      </FollowerPointer>
    </div>
  )
}

export function PixelTrailDemo({
  pixelSize = 20,
  fadeDuration = 500,
  color = "rgba(99, 102, 241, 0.5)",
  className: _className,
  ...props
}: React.ComponentProps<typeof PixelTrail>) {
  return (
    <div className="relative h-75 w-full bg-background border rounded-lg flex items-center justify-center overflow-hidden">
      <PixelTrail
        pixelSize={pixelSize}
        fadeDuration={fadeDuration}
        color={color}
        className="block"
        {...props}
      />
      <p>Hover here to see pixel trail</p>
    </div>
  )
}

export function ScrollProgressiveBlurDemo({
  blurAmount = 10,
  fadeDistance = 200,
  children,
  ...props
}: React.ComponentProps<typeof ScrollProgressiveBlur>) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="absolute inset-0 overflow-y-auto">
        <ScrollProgressiveBlur blurAmount={blurAmount} fadeDistance={fadeDistance} {...props}>
          <div className="flex flex-col items-center gap-4 p-8 min-h-[600px] bg-[url('https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center text-white text-shadow-sm">
            <h1 className="text-4xl font-bold">Scroll Down</h1>
            <p>The content will blur as you scroll.</p>
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={i} className="text-lg">
                Content block {i + 1}
              </p>
            ))}
          </div>
        </ScrollProgressiveBlur>
      </div>
    </div>
  )
}

// ========== NEW COMPONENTS DEMOS ==========

export function DataTableDemo({ columns: _columns, data: _data, ...props }: React.ComponentProps<typeof DataTable>) {
  type Person = {
    id: string
    name: string
    email: string
    status: string
  }

  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ]

  const data: Person[] = [
    { id: "1", name: "John Doe", email: "john@example.com", status: "Active" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
    { id: "3", name: "Bob Johnson", email: "bob@example.com", status: "Active" },
    { id: "4", name: "Alice Williams", email: "alice@example.com", status: "Pending" },
    { id: "5", name: "Charlie Brown", email: "charlie@example.com", status: "Active" },
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      enableSorting
      enablePagination
      pageSize={5}
      {...props}
    />
  )
}

export function DatePickerDemo(props: React.ComponentProps<typeof DatePicker>) {
  const [date, setDate] = React.useState<Date>()

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Pick a date"
      {...props}
    />
  )
}

export function ComboboxDemo({ value, onChange, ...props }: React.ComponentProps<typeof Combobox>) {
  const [demovalue, setDemoValue] = React.useState("")

  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "solid", label: "Solid" },
  ]

  return (
    <Combobox
      {...props}
      options={options}
      value={value || demovalue}
      onChange={onChange || setDemoValue}
      placeholder="Select framework..."
      emptyText="No framework found."
    />
  )
}

export function AriaLiveRegionDemo(props: React.ComponentProps<typeof AriaLiveRegion>) {
  const [message, setMessage] = React.useState("")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button onClick={() => setMessage(`Item saved at ${new Date().toLocaleTimeString()}`)}>
          Save Item
        </Button>
        <Button onClick={() => setMessage(`Item deleted at ${new Date().toLocaleTimeString()}`)}>
          Delete Item
        </Button>
      </div>
      <AriaLiveRegion mode="polite" {...props}>
        {message}
      </AriaLiveRegion>
      <div className="text-sm text-muted-foreground">
        {message && <p>Screen reader announced: "{message}"</p>}
      </div>
    </div>
  )
}

export function ModalDemo(props: React.ComponentProps<typeof Modal>) {
  const {
    open: openProp,
    onOpenChange,
    children,
    title,
    description,
    showClose,
    className,
    ...rest
  } = props
  const [open, setOpen] = React.useState(Boolean(openProp))

  React.useEffect(() => {
    if (typeof openProp === "boolean") {
      setOpen(openProp)
    }
  }, [openProp])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => handleOpenChange(true)}>Open Modal</Button>
      <Modal
        open={open}
        onOpenChange={handleOpenChange}
        title={title || "Example Modal"}
        description={description || "A short description for the modal content."}
        showClose={showClose ?? true}
        className={className}
        {...rest}
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {children || "This modal showcases content, actions, and close behavior."}
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={() => handleOpenChange(false)}>Confirm</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export function PopoverDemo(props: React.ComponentProps<typeof Popover> & { align?: React.ComponentProps<typeof PopoverContent>['align'], side?: React.ComponentProps<typeof PopoverContent>['side'], sideOffset?: React.ComponentProps<typeof PopoverContent>['sideOffset'] }) {
  const {
    open: openProp,
    defaultOpen,
    onOpenChange,
    align = "center",
    side = "bottom",
    sideOffset = 8,
    children,
    ...rest
  } = props
  const [open, setOpen] = React.useState(
    typeof openProp === "boolean" ? openProp : Boolean(defaultOpen)
  )

  React.useEffect(() => {
    if (typeof openProp === "boolean") {
      setOpen(openProp)
    }
  }, [openProp])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange} {...rest}>
      <PopoverTrigger className="inline-flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm hover:bg-muted">
        Toggle Popover
      </PopoverTrigger>
      <PopoverContent align={align} side={side} sideOffset={sideOffset}>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Quick Actions</h4>
          <p className="text-xs text-muted-foreground">
            {children || "Keep helpful tips or actions right next to the trigger."}
          </p>
          <Button size="sm" onClick={() => handleOpenChange(false)}>
            Close
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function UnicornProviderDemo(props: React.ComponentProps<typeof UnicornThemeProvider>) {
  const { children, config, ...rest } = props
  const hasConfig = config && Object.keys(config).length > 0

  return (
    <UnicornThemeProvider config={config} {...rest}>
      <Card className="w-full max-w-lg p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold">UnicornThemeProvider</h3>
          <p className="text-sm text-muted-foreground">
            Wrap your app to centralize theme configuration.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button>Primary</Button>
          <Button variant="outline">Secondary</Button>
        </div>
        {children ? (
          <div className="text-sm text-muted-foreground">{children}</div>
        ) : (
          <div className="text-sm text-muted-foreground">
            This area renders provider children and inherits theme styles.
          </div>
        )}
        {hasConfig ? (
          <pre className="rounded-md bg-muted p-3 text-xs text-muted-foreground">
            {JSON.stringify(config, null, 2)}
          </pre>
        ) : null}
      </Card>
    </UnicornThemeProvider>
  )
}

export function HeroVideoDialogDemo(props: React.ComponentProps<typeof HeroVideoDialog>) {
  const { videoSrc, thumbnailSrc, thumbnailAlt, className, ...rest } = props
  const resolvedVideo =
    videoSrc || "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0"
  const resolvedThumbnail = thumbnailSrc || "/hero-dark.png"

  return (
    <div className="w-full max-w-2xl">
      <HeroVideoDialog
        videoSrc={resolvedVideo}
        thumbnailSrc={resolvedThumbnail}
        thumbnailAlt={thumbnailAlt || "Product preview"}
        className={className}
        {...rest}
      />
    </div>
  )
}

export function PixelImageDemo(props: React.ComponentProps<typeof PixelImage>) {
  const { src, pixelSize, className, ...rest } = props
  const size = typeof pixelSize === "number" ? pixelSize : 12

  return (
    <div className="flex items-center justify-center">
      <PixelImage
        src={src || "/hero-dark.png"}
        pixelSize={size}
        className={cn("rounded-lg max-w-full", className)}
        {...rest}
      />
    </div>
  )
}

export function TerminalDemo(props: React.ComponentProps<typeof Terminal>) {
  const { title, children, ...rest } = props
  const content =
    children ||
    `pnpm add @unicorn-ui/ui\n\n# Initialize a new project\npnpm dlx unicorn-ui init\n\n# Run your docs\npnpm dev:docs`

  return (
    <Terminal title={title || "unicorn-ui"} className="w-full" {...rest}>
      {content}
    </Terminal>
  )
}

export function TestimonialsCardDemo({ testimonials: _testimonials, ...props }: React.ComponentProps<typeof TestimonialsCard>) {
  const testimonials = [
    {
      id: 1,
      name: "Ava Patel",
      role: "Design Lead",
      message: "Unicorn UI shipped our new dashboard in half the time.",
    },
    {
      id: 2,
      name: "Noah Kim",
      role: "Product Engineer",
      message: "The components feel premium out of the box and are easy to theme.",
    },
    {
      id: 3,
      name: "Mia Torres",
      role: "Founder",
      message: "We finally have a design system that scales with the team.",
    },
  ]

  return <TestimonialsCard testimonials={testimonials} {...props} />
}

export function InteractiveBookDemo(props: React.ComponentProps<typeof InteractiveBook>) {
  return <InteractiveBook {...props} />
}

export function LightLinesDemo(props: React.ComponentProps<typeof LightLines>) {
  return <LightLines className="h-64 w-full rounded-lg border border-border" {...props} />
}

export function PerspectiveGridDemo(props: React.ComponentProps<typeof PerspectiveGrid>) {
  return <PerspectiveGrid className="h-64 rounded-lg border border-border" {...props} />
}

export function LineHoverLinkDemo(props: React.ComponentProps<typeof LineHoverLink>) {
  const { children, href, className, ...rest } = props
  return (
    <LineHoverLink href={href || "#"} className={className} {...rest}>
      {children || "Hover over this link"}
    </LineHoverLink>
  )
}

export function LiquidTextDemo(props: React.ComponentProps<typeof LiquidText>) {
  const { children, className, ...rest } = props
  const text = typeof children === "string" ? children : "Liquid Text"
  return (
    <LiquidText className={className} {...rest}>
      {text}
    </LiquidText>
  )
}

export function LogoSliderDemo(props: React.ComponentProps<typeof LogoSlider>) {
  const { logos, direction, speed, pauseOnHover, className, ...rest } = props
  const defaultLogos = [
    "Aurora",
    "Nebula",
    "Prism",
    "Orbit",
    "Lumen",
  ].map((label) => (
    <div
      key={label}
      className="h-10 w-20 rounded-md border border-border bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground grid place-items-center"
    >
      {label}
    </div>
  ))

  return (
    <LogoSlider
      logos={Array.isArray(logos) && logos.length > 0 ? logos : defaultLogos}
      direction={direction}
      speed={typeof speed === "number" ? speed : 40}
      pauseOnHover={pauseOnHover ?? true}
      className={className}
      {...rest}
    />
  )
}

export function SmoothScrollDemo({ children, ...props }: React.ComponentProps<typeof SmoothScroll>) {
  return (
    <div className="h-64 w-full overflow-hidden rounded-lg border border-border bg-muted/30">
      <SmoothScroll {...props}>
        <div className="space-y-6 p-6">
          {["Design Tokens", "Motion Presets", "Component Variants", "Accessibility"].map(
            (title, idx) => (
              <Card key={title} className="p-4 shadow-sm">
                <div className="text-sm text-muted-foreground">Section {idx + 1}</div>
                <div className="text-lg font-semibold">{title}</div>
                <p className="text-sm text-muted-foreground">
                  Smooth scrolling wraps your content for a refined, premium experience.
                </p>
              </Card>
            )
          )}
        </div>
      </SmoothScroll>
    </div>
  )
}

export function StackedLogosDemo(props: React.ComponentProps<typeof StackedLogos>) {
  const { items, className, ...rest } = props
  const defaultItems = [
    "Unity",
    "Rivet",
    "Nova",
    "Pulse",
  ].map((label) => (
    <div
      key={label}
      className="h-12 w-20 rounded-lg border border-border bg-card text-xs font-semibold uppercase tracking-wider text-muted-foreground grid place-items-center"
    >
      {label}
    </div>
  ))

  return (
    <StackedLogos
      items={Array.isArray(items) && items.length > 0 ? items : defaultItems}
      className={className}
      {...rest}
    />
  )
}

export function AndroidDemo(props: React.ComponentProps<typeof Android>) {
  const { src, className, ...rest } = props
  return <Android src={src || "/hero-dark.png"} className={className} {...rest} />
}

export function IphoneDemo(props: React.ComponentProps<typeof Iphone>) {
  const { src, className, ...rest } = props
  return <Iphone src={src || "/hero-dark.png"} className={className} {...rest} />
}
