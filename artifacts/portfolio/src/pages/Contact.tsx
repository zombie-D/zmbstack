import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSendContactMessage } from "@workspace/api-client-react"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactSchema = z.object({
  name: z.string().min(2, "Identifier must be at least 2 characters."),
  email: z.string().email("Invalid transmission address."),
  subject: z.string().min(3, "Subject parameter required."),
  message: z.string().min(10, "Payload body too short."),
})

export default function Contact() {
  const { toast } = useToast()
  const sendMessage = useSendContactMessage()

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof contactSchema>) {
    sendMessage.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Transmission Complete",
            description: "Your payload has been successfully delivered.",
          })
          form.reset()
        },
        onError: () => {
          toast({
            title: "Transmission Failed",
            description: "Network interference detected. Please try again.",
            variant: "destructive",
          })
        }
      }
    )
  }

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-500 max-w-4xl mx-auto">
      <header className="space-y-4 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Communicate</h1>
        <p className="text-muted-foreground font-light text-lg">
          Establish a direct connection. Open to project inquiries, training sessions, and technical discourse.
        </p>
      </header>

      <div className="grid md:grid-cols-[1fr_300px] gap-12 lg:gap-24 relative">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight">Direct Interface</h2>
            <p className="text-sm text-muted-foreground font-light">Fill out the parameters below to initiate a secure transmission.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Identifier</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="rounded-none border-border bg-card/50 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Return Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className="rounded-none border-border bg-card/50 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Subject Line</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Inquiry / Training Request" className="rounded-none border-border bg-card/50 focus-visible:ring-primary h-12" {...field} />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Payload Body</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Detail your requirements here..." 
                        className="rounded-none border-border bg-card/50 focus-visible:ring-primary min-h-[150px] resize-y" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={sendMessage.isPending}
                className="rounded-none h-12 px-8 font-mono tracking-wide uppercase w-full sm:w-auto"
              >
                {sendMessage.isPending ? (
                  <span className="flex items-center gap-2"><span className="w-2 h-2 bg-primary-foreground rounded-full animate-ping" /> Transmitting...</span>
                ) : (
                  <span className="flex items-center gap-2">Execute Transmission <Send className="w-4 h-4 ml-2" /></span>
                )}
              </Button>
            </form>
          </Form>
        </div>

        <aside className="space-y-8">
          <div className="p-6 border border-border bg-secondary/20 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Alternative Nodes</h3>
            
            <div className="space-y-4">
              <a href="mailto:hello@zmbstack.com" className="flex items-start gap-3 group text-sm font-light hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Direct Email</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">hello@zmbstack.com</div>
                </div>
              </a>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                  Response protocols typically complete within 24-48 hours during standard operating cycles.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
