import os
import requests

# List of image URLs
image_urls = [
	"https://sdk.bitmoji.com/render/panel/10211153-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20020855-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10098550-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20036411-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/7548831-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20002520-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/9422789-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10228094-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20085021-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20090206-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10212727-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/7258102-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/7974012-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20074496-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10221488-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20089248-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20039337-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20085772-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20082977-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10218954-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20062035-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10228567-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20008180-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10226310-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10230713-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10223302-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20029277-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/10226312-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20083340-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20078161-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20017134-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20053175-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	"https://sdk.bitmoji.com/render/panel/20088856-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2",
	
];

# Directory to save images
save_dir = 'downloaded_images'

# Create directory if it doesn't exist
os.makedirs(save_dir, exist_ok=True)

# Function to download an image
def download_image(url, save_path):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()  # Check if the request was successful
        with open(save_path, 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
        print(f"Downloaded {url} to {save_path}")
    except requests.exceptions.RequestException as e:
        print(f"Failed to download {url}: {e}")

# Download all images
for i, url in enumerate(image_urls):
    image_name = f'image_{i + 1}.jpg'  # Create a unique name for each image
    save_path = os.path.join(save_dir, image_name)
    download_image(url, save_path)