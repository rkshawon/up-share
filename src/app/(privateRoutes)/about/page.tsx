import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">About Our Web Application</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p>
          Welcome to our web application! This platform allows you to securely
          upload and share files with others. Follow the steps below to make the
          most of our features.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Steps to Use</h2>

        <ol className="list-decimal ml-6">
          <li className="mb-4">
            <p className="mb-2">
              <span className="font-bold">Sign In:</span> Start by signing in to
              your account. If you dont have an account, you can easily create
              one.
            </p>
          </li>

          <li className="mb-4">
            <p className="mb-2">
              <span className="font-bold">Upload Files:</span> Once signed in,
              navigate to the file upload section. Upload your files using the
              provided interface.
            </p>
          </li>

          <li className="mb-4">
            <p className="mb-2">
              <span className="font-bold">Add Password (Optional):</span> For
              added security, you can choose to add a password to your files.
            </p>
          </li>

          <li className="mb-4">
            <p className="mb-2">
              <span className="font-bold">Share via Email:</span> After
              uploading, share the file by generating a short URL. You can send
              this URL via email to your desired recipients.
            </p>
          </li>

          <li className="mb-4">
            <p className="mb-2">
              <span className="font-bold">View and Manage Files:</span> Access
              the files menu to view all the files youve uploaded. You can also
              preview individual files by clicking on View Button.
            </p>
          </li>

          <li className="mb-4">
            <p className="mb-2">
              <span className="font-bold">Download Shared Files:</span> If you
              receive a shared URL, click on the download button in the email to
              be redirected to the download page.
            </p>
          </li>
        </ol>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Start Exploring!</h2>
        <p>
          Ready to get started?{" "}
          <Link href="/signup">
            <p className="text-purple-600 hover:underline">Sign up now</p>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
