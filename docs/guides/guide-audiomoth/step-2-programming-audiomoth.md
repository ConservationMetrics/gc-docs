# Step 2: Programming the AudioMoth

## Load Configuration

1.  Open the **Configuration App**.

    ![](images/am_configurator.jpg)

2.  Load your configuration file: **File → Open Configuration**.

3.  Set the device clock display: **Time → Local**.

4.  Adjust settings:

### Main Settings

Below are some reccomended settings for standard bird monitoring projects

-   **Sample rate:** 32 kHz

-   **Gain:** Medium

-   **Sleep duration:** 9 min

-   **Recording duration:** 1 min

-   **Schedule:** 00:00–24:00 (set the local timezone e.g. UTC−7)

-   **Filtering:** None

### Advanced Settings

-   Disable: “Require Chime App”

The chime app (smartphone) can be used in the field to set the clock. However we do not want to require it is used for sensors that already have datetime set forrectly. 

-   Enable: “Use device ID as prefix in WAV filename”

-   Leave all other boxes unchecked.

5.  Click **Configure AudioMoth**.

6.  Wait for the button to return to the ready state.

7.  Eject the device safely.

## Expected Runtime

-   **Storage:** \~1336 MB/day → 64 GB ≈ 49 days

-   **Battery:** \~30 days with 3×AA alkaline

-   Typical deployments: 3–6 weeks depending on site conditions.

## Set Device Time

If you have already programmed the audio moth and the batteries have been installed continuously since programming, the audiomoth clock should already be set correctly.  However, if the batteries have been removed at some point, you can use the Time App to just set the clock.

1.  Open the **Time App**.

2.  Click **Set Time** to sync to your computer's local time.

    -   The AudioMoth will store time in **UTC**.

If you see a warning about fast clock drift, verify manually—this
warning is often incorrect.
