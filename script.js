// Function to increment view count
function incrementViewCount() {
  // Check if view count exists in localStorage
  let viewCount = localStorage.getItem("viewCount");

  if (!viewCount) {
    // Initialize view count if not already set
    viewCount = 1;
  } else {
    // Increment the view count
    viewCount = parseInt(viewCount) + 1;
  }

  // Update the view count in localStorage
  localStorage.setItem("viewCount", viewCount);

  // Update the view count in the footer
  document.getElementById(
    "view-count"
  ).textContent = `Page Views: ${viewCount}`;
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", incrementViewCount);
