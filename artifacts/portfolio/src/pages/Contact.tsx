import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useSendContactMessage } from "@workspace/api-client-react"

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

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Adresse email invalide."),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
})

export default function Contact() {
  const { toast } = useToast()
  const sendMessage = useSendContactMessage()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendMessage.mutate({ data: values }, {
      onSuccess: () => {
        toast({
          title: "Message envoyé",
          description: "Merci pour votre message, je vous répondrai rapidement.",
        })
        form.reset()
      },
      onError: () => {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
          variant: "destructive"
        })
      }
    })
  }

  return (
    <div className="p-6 md:p-12 lg:p-20 max-w-6xl mx-auto w-full">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">COMMUNICATION</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">CONTACT</h1>
        <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Un projet, une question ou une proposition de collaboration ? N'hésitez pas à me contacter via ce formulaire.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card border border-border p-8">
            <h3 className="text-sm font-bold tracking-widest uppercase text-foreground mb-6">Informations</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background border border-border shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                  <a href="mailto:contact@zmbstack.com" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
                    contact@zmbstack.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-background border border-border shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Localisation</p>
                  <p className="text-sm text-foreground font-medium">Paris, France<br/>(Remote possible)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card border border-border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="rounded-none border-border bg-background h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Adresse Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="rounded-none border-border bg-background h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Sujet</FormLabel>
                    <FormControl>
                      <Input placeholder="Proposition de mission" className="rounded-none border-border bg-background h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Décrivez votre besoin..." 
                        className="rounded-none border-border bg-background min-h-[160px] resize-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={sendMessage.isPending} className="w-full h-12 rounded-none text-xs font-bold uppercase tracking-wider gap-2">
                {sendMessage.isPending ? "ENVOI EN COURS..." : "ENVOYER LE MESSAGE"}
                {!sendMessage.isPending && <Send className="w-4 h-4" />}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
