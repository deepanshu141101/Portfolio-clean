export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 pt-28">
      <h2 className="text-3xl mb-8">Contact</h2>

      <div className="space-y-3 text-sm max-w-xl">
        <p><span className="opacity-70">Name:</span> Deepanshu Pandey</p>
        <p><span className="opacity-70">Phone:</span> +91-9760072264</p>
        <p><span className="opacity-70">Email:</span> deepanshu30pandey@gmail.com</p>

        <p>
          <span className="opacity-70">GitHub:</span>{" "}
          <a
            href="https://github.com/deepanshu141101"
            target="_blank"
            className="underline hover:text-green-300"
          >
            github.com/deepanshu141101
          </a>
        </p>

        <p>
          <span className="opacity-70">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/deepanshu-p-423293121/"
            target="_blank"
            className="underline hover:text-green-300"
          >
            linkedin.com/in/deepanshu-p-423293121/
          </a>
        </p>
      </div>
    </section>
  );
}