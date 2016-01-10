#pragma strict

function RTImage(cam: Camera) {
		// The Render Texture in RenderTexture.active is the one
		// that will be read by ReadPixels.
		var currentRT = RenderTexture.active;
		RenderTexture.active = cam.targetTexture;
		
		// Render the camera's view.
		cam.Render();
		
		// Make a new texture and read the active Render Texture into it.
		var image = new Texture2D(cam.targetTexture.width, cam.targetTexture.height);
		image.ReadPixels(new Rect(0, 0, cam.targetTexture.width, cam.targetTexture.height), 0, 0);
		image.Apply();
		
		// Replace the original active Render Texture.
		RenderTexture.active = currentRT;
		return image;
	}