let isLiked = false;
let likeCount = 0;

function toggleLike() {
    if (isLiked) {
        likeCount--;
    } else {
        likeCount++;
    }

    isLiked = !isLiked;

    updateLikeCount();
}

function updateLikeCount() {
    const likeCountElement = document.getElementById('likeCount');
    likeCountElement.textContent = likeCount;
}
