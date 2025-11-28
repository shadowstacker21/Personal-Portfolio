import img from '../assets/image/contact.jpg'
export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>
       
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate developer with 1+ years of experience building web applications. I love solving complex
              problems and creating intuitive user experiences that delight users.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me contributing to open source, writing technical blogs, or exploring
              new technologies. I'm always eager to learn and collaborate with other developers.
            </p>
            <div className="pt-4">
              <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ 1+ years of experience</li>
                <li>✓ 10+ projects completed</li>
                <li>✓ Open source contributor</li>
                <li>✓ Full-stack developer</li>
              </ul>
            </div>
          </div>

          <div className="h-96 rounded-2xl overflow-hidden border border-accent/30 bg-card">
            <img src={img} alt="Developer workspace" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
