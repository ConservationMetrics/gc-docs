# Step 2: Creating a Timelapse Template

:::note

For detailed instructions, see the [Timelapse Template Guide](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseReferenceGuide.pdf).

:::

This step is where you create custom database fields for your project. The Timelapse interface uses the fields defined in the template to structure the database during the image review process. The template must be stored in the root folder of your image dataset (following the folder structure above, this will be the latest retrieval folder).

1. **Start the Timelapse Template Editor** software.

2. To create a new template: go to **File → New Template**, navigate to the root folder of your image dataset, and save the template with a unique name.

3. The newly created template will include the mandatory data fields required by Timelapse. You do not need to modify these.

4. Use the **Add** button on the right side of the table to define fields and select a data type:
   - **Notes**: Free text
   - **Counts**: Integers
   - **Flags**: True/false
   - **Choices**: Dropdown menu with predefined options

**Suggested fields:**

- `Species` (**Choices**)
- `Count` (**Counts**)
- `Notes` (**Notes**) — for reviewer comments
- `Highlight` (**Flag**) — to mark notable images
- Additional `Notes` field — for general observations

:::important

Ensure your `.tdb` template file is saved in the root folder of the image dataset.

:::
