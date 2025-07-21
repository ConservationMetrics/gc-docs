---
sidebar_position: 2
---

# Best Practices and Usage Tips

This page covers practical lessons learned from using KoboToolbox in real-world scenarios, including common pitfalls and their solutions.

## Browser Compatibility and Data Collection Methods

### Avoid Enketo Web Forms on iOS Safari for Media Submissions

**Issue**: Using Enketo web forms in Safari on iPhone as a workaround for KoboToolbox's lack of a native iOS app can cause significant problems with file uploads.

**Best Practice**: 
- Use Android devices with the official KoboCollect app for surveys requiring media attachments (photos, audio, video)
- If iOS devices are necessary, consider alternative data collection workflows that don't rely on media submissions through the browser
- Test thoroughly in your target browser environment before deploying forms that require media uploads

### Enketo Duplicate Submission Issues on Some Browsers

**Issue**: Enketo sometimes successfully submits data to KoboToolbox but fails to clear the submission from the local browser cache, leading to duplicate submissions when users attempt to submit again.

**Solution**: 
1. Clear browser storage manually via DevTools:
   - Open browser DevTools (F12)
   - Navigate to the **Application** tab
   - Select **Clear Data** to remove cached submissions
2. Train data collectors to recognize successful submission confirmations
3. Implement data validation workflows to identify and handle duplicates during data processing

**Prevention**: 
- Use the official KoboCollect Android app whenever possible for more reliable submission handling
- Regularly clear browser cache during extended data collection periods

## File Size Limitations

### Background Audio Recording Limits (10MB per file)

**Critical Limitation**: KoboToolbox has a **10MB file size limit per individual file**, which significantly impacts background audio recordings for interviews that may exceed 2 hours.

**File Format Recommendations**:
- Use `.amr` format for the longest recording duration (≈2 hours at 10MB limit)
- Avoid higher quality formats for long interviews, as they will exceed the limit faster
- Plan interview segments to stay under the 2-hour threshold

**Planning Considerations**:
- Split long interviews into multiple shorter sessions
- Inform interviewers about the time limitation before starting
- Have a backup recording method for interviews expected to exceed 2 hours

:::note
This 10MB per-file limitation is not clearly documented in the [official KoboToolbox background audio documentation](https://support.kobotoolbox.org/recording-interviews.html).
:::

### Overall Submission Size Limits

**Limit**: Each survey submission has a **100MB total size limit** across all attached files.

**Best Practices**:
- Calculate total file sizes before submission, especially for surveys with multiple media attachments
- Compress images and videos when possible while maintaining acceptable quality for your use case
- Consider splitting large data collections into multiple related submissions if necessary
- Monitor storage usage regularly, particularly for projects with extensive media collection

## Form Design and Deployment

### Form Structure Planning and Avoiding Data Fragmentation

**Issue**: Modifying form structure after data collection has begun can lead to data fragmentation, where the same logical field appears in multiple columns across your dataset.

**Example**: If you have a question `what_is_your_age` but later decide to move it into a group called `demographics` (making it `demographics/what_is_your_age`), submissions collected before and after the change will have age data in different columns. This creates cleanup work and potential data analysis complications.

**Best Practice**:
- Plan your form structure carefully before deployment, considering logical groupings and question organization
- Think through potential future changes and group related questions together from the start
- If structural changes are absolutely necessary after data collection has begun:
  - Document all changes and their dates
  - Plan for data consolidation during analysis
  - Consider whether it's worth creating a new form version versus data cleanup effort
- Test your form structure thoroughly with pilot data to identify organizational issues early

### Testing Workflows

**Before Deployment**:
- Test forms with actual media files in your target collection environment
- Verify file upload functionality across different devices and browsers
- Test offline functionality and synchronization if working in areas with limited connectivity
- Validate that all media files stay within size constraints

### Data Quality Assurance

**During Collection**:
- Implement regular data backup procedures
- Train collectors to recognize and report submission errors immediately
- Establish protocols for handling duplicate submissions
- Monitor submission success rates and file upload completion

## Storage and Infrastructure Planning

### Account Management and Tiers

**Free Tier Considerations**:
- 5,000 submissions per month limit
- 1GB total storage limit
- Monitor usage regularly to avoid service interruptions

**Paid Tier Planning**:
- Factor in media file sizes when estimating storage needs
- Consider the cost implications of media attachments (such as background audio recordings or image/video uploads) for large-scale projects
- Plan for additional storage costs early in project budgeting
- As of this writing, the cheapest paid plan is the Professional plan at $159 per month, which provides unlimited file storage. See [KoboToolbox Pricing](https://www.kobotoolbox.org/pricing) for up-to-date information.

## Getting Help and Support

### KoboToolbox Support Channels

**Official Support Email**: For questions or issues, you can reach out to `support@kobotoolbox.org`.

**Community Forum**: The [KoboToolbox Community Forum](https://community.kobotoolbox.org/) is very active and you may get a response sooner than through direct email contact. The forum is particularly useful for:
- Getting help from experienced community members
- Finding solutions to common problems
- Sharing best practices with other users
- Staying updated on new features and releases

:::tip
Try searching the community forum first, as many common issues and questions have already been addressed. If you can't find an answer, post your question there before contacting support directly.
:::