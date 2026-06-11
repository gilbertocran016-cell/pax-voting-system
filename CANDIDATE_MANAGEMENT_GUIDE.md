# 📋 HOW TO MANAGE CANDIDATES IN PAX VOTING SYSTEM

## Overview
The PAX Voting System has two main interfaces:
1. **Admin Panel** - Manage candidates, portfolios, and view results
2. **Voter Terminal** - Where voters cast their ballots

---

## 🔐 Accessing the Admin Panel

### Step 1: Navigate to Admin
Go to: `https://pax-voting-system.vercel.app/admin.html`

### Step 2: Enter Master Passkey
The admin password is hashed with SHA-256. The current passkey generates this hash:
```
5bcdc1a11fb2f21fc6be9f3feebe417b2ea98a9415ac056c5f668e0f55452acf
```

**To find your passkey**: Ask your system administrator, or check the `.env.local` file.

### Step 3: Access the Dashboard
Once logged in, you'll see the admin dashboard with 4 tabs:
- **LIVE TALLY MONITORING** - See vote counts in real-time
- **PORTFOLIO SETTINGS** - Add/manage candidates and portfolios
- **TOKEN MANAGEMENT CENTER** - Generate and manage voter tokens
- **STATISTICS & ANALYTICS** - View detailed voting statistics

---

## 👥 Adding a New Candidate

### Step 1: Click "PORTFOLIO SETTINGS" Tab
This is where you manage candidates.

### Step 2: Select Target Portfolio
In the "Register Candidate" section on the left:
- Click the **"Target Portfolio"** dropdown
- Select which position the candidate is running for:
  - President
  - Vice President
  - General Secretary
  - Financial Secretary
  - Organizing Secretary
  - P.R.O. (Public Relations Officer)
  - Women's Commissioner

### Step 3: Enter Candidate Details
Fill in these fields:
- **Full Name** - Candidate's full name (e.g., "Emmanuel Opoku Ware")
- **Candidate Photo** (Optional) - Upload a profile picture

### Step 4: Register Candidate
Click the **"REGISTER CANDIDATE"** button

**Expected Response**:
- ✅ Success alert appears
- Candidate appears in the "Active Registrations Matrix" on the right
- Portfolio section shows candidate count increasing

---

## 📊 Viewing All Candidates

### In Admin Panel
Go to **PORTFOLIO SETTINGS** tab → Look at the right side under **"Active Registrations Matrix"**

You'll see:
- Each portfolio (position) as a separate card
- List of all candidates for that portfolio
- Candidate count for each portfolio
- Delete button for each candidate

### Example:
```
President Track (2 candidates)
├─ Emmanuel Opoku Ware [Delete]
└─ Michael Kofi Asare [Delete]

Vice President Track (2 candidates)
├─ Francisca Yeboah [Delete]
└─ Samuel Mensah Jnr [Delete]
```

---

## 🗑️ Deleting a Candidate

### From Admin Panel
1. Go to **PORTFOLIO SETTINGS**
2. Find the candidate in the **"Active Registrations Matrix"**
3. Click the red **[Delete]** button next to their name
4. Confirm the deletion when prompted

### Important Note
- Deleting a candidate removes them from future voting
- **Historical votes are NOT deleted** - voting statistics remain accurate
- You can re-add a candidate with the same name later (they'll get a new ID)

---

## 🔄 FIXED: Candidate Disappearance Bug

### What Was Wrong?
Previously, when adding multiple candidates quickly, the first candidate would disappear. This was caused by:
- Using only a timestamp for the unique ID
- When two candidates were added within the same millisecond, they'd get the same ID
- The second candidate would overwrite the first in the database

### What's Fixed Now?
The system now uses a **combination ID**:
```
{portfolio}-{candidate-name}-{random-letters}
```

**Example Generated IDs**:
- `president-emmanuel-opoku-ware-X7K9M2`
- `vice_president-francisca-yeboah-P4L8R1`

This ensures **100% unique IDs** even for rapid submissions.

### Testing the Fix
1. Open **Portfolio Settings** in Admin
2. Add 3 candidates quickly (within a few seconds)
3. All 3 should appear in the matrix
4. Refresh the page
5. All 3 should still be there (persisted to database)

---

## 📈 Viewing Vote Counts

### Real-Time Tally (Admin Only)
1. Click **"LIVE TALLY MONITORING"** tab
2. See vote counts for each candidate in real-time
3. Vote bars update as voters cast ballots

### Statistics & Analytics
1. Click **"STATISTICS & ANALYTICS"** tab
2. View:
   - Vote totals by candidate (with photos)
   - Vote percentages
   - Turnout statistics
   - Portfolio breakdown

---

## 🎫 Managing Voter Tokens

### Generate Tokens
1. Click **"TOKEN MANAGEMENT CENTER"** tab
2. Set:
   - **Framework Profile**: Male Unit or Female Unit
   - **Batch Size**: How many tokens to generate (default: 10)
3. Click **"BULK GENERATE TOKENS"**
4. Tokens are generated and ready for distribution

### Token Format
Generated tokens look like: `X7K9M-P4L8R`

These are distributed to voters who must enter them to access the voting terminal.

---

## 🚀 Voter Workflow

### What Voters See
1. **Gender Selection** - Male or Female unit
2. **Token Entry** - Enter their voter token
3. **Voting Booth** - See all candidates for each portfolio
4. **Select Candidates** - One candidate per portfolio
5. **Submit Ballot** - Final confirmation and vote counted

### Candidate Display in Voting Booth
Voters see candidates organized by portfolio:
- **President** section shows all presidential candidates
- **Vice President** section shows all VP candidates
- etc.

---

## 🔍 Debugging Tips

### If a Candidate Doesn't Appear
**In Browser Console (F12 → Console tab)**:
1. Type: `window.candidates` and press Enter
2. You'll see all candidates in the database
3. Check that the `position` field matches the portfolio ID

### If Votes Aren't Counting
1. Check that the voter's token is marked as "used"
2. Verify the candidate's ID is correct
3. Check the browser console for JavaScript errors

### Checking Database Directly
Open browser console and type:
```javascript
// See all candidates
console.log(window.candidates);

// See all portfolios
console.log(window.portfolios);

// See all tokens
console.log(window.tokens);

// See vote totals
console.log(window.candidates.map(c => ({ name: c.name, votes: c.votes })));
```

---

## 📝 Complete Workflow Example

### Scenario: Add 3 Presidential Candidates

**Step 1: Go to Admin → Portfolio Settings**

**Step 2: Make Sure Portfolio Exists**
- Default portfolios are auto-created
- Presidential portfolio should already exist

**Step 3: Register First Candidate**
- Portfolio: "President"
- Name: "Emmanuel Opoku Ware"
- Photo: (optional - select from computer)
- Click: REGISTER CANDIDATE
- ✅ See success message
- Candidate appears in matrix

**Step 4: Register Second Candidate**
- Portfolio: "President"
- Name: "Michael Kofi Asare"
- Photo: (optional)
- Click: REGISTER CANDIDATE
- ✅ Both candidates now visible in matrix

**Step 5: Register Third Candidate**
- Portfolio: "President"
- Name: "Grace Mensah"
- Click: REGISTER CANDIDATE
- ✅ All 3 candidates visible
- Matrix shows: "President Track (3 candidates)"

**Step 6: Verify in Voting Booth**
1. Go to main voting page: `https://pax-voting-system.vercel.app/`
2. Generate a test token in admin
3. Use that token to enter voting booth
4. Select "Male Unit" or "Female Unit"
5. Go to "President" section
6. Verify all 3 candidates appear

---

## 🆘 Support

If you encounter issues:

1. **Check the browser console** (F12) for errors
2. **Verify internet connection** - Firestore needs cloud access
3. **Clear browser cache** - Sometimes old data persists
4. **Check candidate database** - Use `window.candidates` in console
5. **Review BUG_FIX_EXPLANATION.md** - Technical details about the fix

---

## Summary

| Action | Where | How |
|--------|-------|-----|
| **Add Candidate** | Portfolio Settings | Fill form → Click Register |
| **View Candidates** | Active Registrations Matrix | See all per portfolio |
| **Delete Candidate** | Portfolio Settings | Click [Delete] button |
| **See Vote Counts** | Live Tally OR Statistics | Real-time or analytics tab |
| **Generate Tokens** | Token Management | Set type & count → Generate |
| **Check Database** | Browser Console | Type: `window.candidates` |

---

## 🎉 Key Improvement

With the fix applied:
- ✅ Candidates no longer disappear when adding multiple quickly
- ✅ Unique IDs prevent data overwriting
- ✅ Better error handling with try-catch blocks
- ✅ Debug logging for troubleshooting
- ✅ UI properly refreshes after database updates

You can now confidently add as many candidates as you need!
