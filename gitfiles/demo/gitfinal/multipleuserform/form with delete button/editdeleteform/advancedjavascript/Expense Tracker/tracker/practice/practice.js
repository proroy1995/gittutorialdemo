const posts = [];
let lastUserActivityTime = null;

// Simulated deletePost function with a promise
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

// Function to update the user's last activity time
function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastUserActivityTime = new Date().toISOString();
            resolve(lastUserActivityTime);
        }, 1000);
    });
}

// Function to create a new post
function createPost(post) {
    return new Promise(async (resolve) => {
        await updateLastUserActivityTime(); // Update last activity time before creating a post
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

// Helper function to print posts and last activity time
function printPostsAndLastActivityTime() {
    console.log("Posts:", posts);
    console.log("Last User Activity Time:", lastUserActivityTime);
}

// Main logic
async function main() {
    // Create a new post
    await createPost({ title: "New Post" });

    // Print posts and last activity time after creating a post
    printPostsAndLastActivityTime();

    // Delete the last post
    try {
        const deletedPost = await deletePost();
        console.log("Deleted Post:", deletedPost);
    } catch (error) {
        console.log(error);
    }

    // Print remaining posts after deletion
    printPostsAndLastActivityTime();
}

// Run the main logic
main();
