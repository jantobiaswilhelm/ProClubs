# Adding Player Avatars

This folder contains all player avatar images for the ProClubs roster.

## How to Add Images

1. **Add your image files** to this folder with these exact names:
   - `jan.jpg` or `jan.png` - Jan Lehmann Wilhelm
   - `hank.jpg` or `hank.png` - Hank The Tank
   - `patty.jpg` or `patty.png` - Patty Skjæveland
   - `obamna.jpg` or `obamna.png` - Obamna
   - `tekky.jpg` or `tekky.png` - Tekky Mafioso
   - `igl.jpg` or `igl.png` - Irish IGL
   - `spidey.jpg` or `spidey.png` - Spidey (Emy)
   - `six.jpg` or `six.png` - Six
   - `tuva.jpg` or `tuva.png` - Tuva (placeholder GK)
   - `ratty.jpg` or `ratty.png` - Ratty (placeholder CB)
   - `p1ksel.jpg` or `p1ksel.png` - p1ksel (placeholder RB)
   - `placeholder.png` - Default fallback image

2. **Update `avatars.js`** - Uncomment the corresponding import lines for each image you add

   Example - if you add `jan.png`:
   ```javascript
   // BEFORE (commented)
   // import jan from './jan.png';
   
   // AFTER (uncommented)
   import jan from './jan.png';
   ```

   And in the export section:
   ```javascript
   // BEFORE
   export const avatars = {
     // jan,
     placeholder
   };
   
   // AFTER
   export const avatars = {
     jan,
     placeholder
   };
   ```

3. **Image Requirements:**
   - Format: JPG or PNG
   - Recommended size: 400x400px minimum
   - Square images work best for the circular display
   - File size: Keep under 1MB per image

## Missing Images

If an image is not found, the app will use `placeholder.png` as a fallback. Make sure this file exists!

## Quick Start

To get started quickly, you can:
1. Use profile pictures from Discord, Steam, or social media
2. Use FIFA/EA FC player faces
3. Create custom avatars using tools like Midjourney, DALL-E, or https://thispersondoesnotexist.com/
4. Use meme images that represent each player's personality
