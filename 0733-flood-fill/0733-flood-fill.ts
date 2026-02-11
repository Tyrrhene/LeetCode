function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const rows = image.length
    const cols = image[0]?.length
    const original = image[sr][sc]

    if (original === color) return image

    function fill(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) return;
        if (image[r][c] !== original) return;

        image[r][c] = color
        fill(r + 1, c)
        fill(r - 1, c)
        fill(r, c + 1)
        fill(r, c - 1)
    }

    fill(sr, sc)
    return image
};