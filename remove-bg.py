#!/usr/bin/env python3
"""
Background Removal Script for Hero Assets
Removes backgrounds from PNG images using rembg library
"""

from rembg import remove
from PIL import Image
import os

def remove_background(input_path, output_path):
    """Remove background from an image"""
    print(f"Processing: {input_path}")

    # Open input image
    input_image = Image.open(input_path)

    # Remove background
    output_image = remove(input_image)

    # Save output image
    output_image.save(output_path)
    print(f"Saved: {output_path}")

def main():
    # Define assets directory
    assets_dir = "public/assets/hero"

    # Images that need background removal
    images_to_process = [
        "moutains2.png",
        "plateu.png",
        "nanakleft.png"
    ]

    for image_name in images_to_process:
        input_path = os.path.join(assets_dir, image_name)

        # Check if file exists
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            continue

        # Create output filename (add -nobg suffix)
        name_without_ext = os.path.splitext(image_name)[0]
        output_name = f"{name_without_ext}-nobg.png"
        output_path = os.path.join(assets_dir, output_name)

        # Remove background
        try:
            remove_background(input_path, output_path)
            print(f"✓ Successfully processed {image_name}\n")
        except Exception as e:
            print(f"✗ Error processing {image_name}: {e}\n")

if __name__ == "__main__":
    print("=" * 50)
    print("Background Removal Script")
    print("=" * 50)
    print()

    main()

    print()
    print("=" * 50)
    print("Done! Check public/assets/hero/ for *-nobg.png files")
    print("=" * 50)
