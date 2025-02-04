export function sharePost(url) {
  // Function to handle the sharing action
  const handleShare = async () => {
    if (navigator.share) {
      try {
        // console.log("Sharing...");

        // Construct the URL you want to share, ensuring correct concatenation
        const shareUrl = url;

        // Using Web Share API to share the content
        await navigator.share({
          title: "RBlogs", // The title of the content
          text: "This is an awesome page!", // The text to share
          url: shareUrl, // The URL to share
        });

        // console.log('Share successful!');
      } catch (err) {
        console.error("Error while sharing:", err);
      }
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  // Call the handleShare function
  handleShare();
}
