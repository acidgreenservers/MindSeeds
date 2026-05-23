from playwright.sync_api import sync_playwright, expect

def test_toggle_visibility():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # We need to account for the base path /MindSeeds/
        context = browser.new_context(viewport={'width': 1280, 'height': 720})
        page = context.new_page()

        # Start the preview server in the background
        import subprocess
        import time
        import os

        # Kill any existing process on port 4173
        subprocess.run("kill $(lsof -t -i :4173) 2>/dev/null || true", shell=True)

        proc = subprocess.Popen(["npm", "run", "preview"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        time.sleep(5) # Wait for server to start

        try:
            page.goto("http://localhost:4173/MindSeeds/")

            # Check for the button with aria-label "Toggle Theme"
            toggle = page.get_by_label("Toggle Theme")
            expect(toggle).to_be_visible()

            # Take screenshot
            page.screenshot(path="verification/toggle_present.png")
            print("Screenshot saved to verification/toggle_present.png")

            # Toggle to light mode
            toggle.click()
            time.sleep(1)
            page.screenshot(path="verification/light_mode_active.png")
            print("Screenshot saved to verification/light_mode_active.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()
            proc.terminate()

if __name__ == "__main__":
    test_toggle_visibility()
