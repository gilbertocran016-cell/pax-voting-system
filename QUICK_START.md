# Quick Reference: Adding Candidates to PAX Voting System

## 🚀 Quick Steps to Add a Candidate

### 1. Go to Admin Panel
```
https://pax-voting-system.vercel.app/admin.html
```

### 2. Enter Your Passkey
(Ask admin for this - it's hashed with SHA-256)

### 3. Click "PORTFOLIO SETTINGS" Tab

### 4. Fill the "Register Candidate" Form
- **Target Portfolio**: Choose the position (President, Vice President, etc.)
- **Full Name**: Enter candidate's name
- **Candidate Photo**: (Optional) Upload a profile picture

### 5. Click "REGISTER CANDIDATE" Button

### 6. Success! ✅
- You'll see a success message
- Candidate appears in the "Active Registrations Matrix" on the right

---

## 📊 View All Candidates

**Location**: Portfolio Settings tab → Active Registrations Matrix (right side)

**Shows**:
- Each portfolio with candidate count
- List of candidates for each portfolio
- Delete button for each candidate

---

## 🗑️ Delete a Candidate

1. Find them in Active Registrations Matrix
2. Click the red **[Delete]** button
3. Confirm deletion

---

## ⚙️ Generate Voter Tokens

1. Click **"TOKEN MANAGEMENT CENTER"** tab
2. Choose:
   - **Framework Profile**: Male Unit or Female Unit
   - **Batch Size**: Number to generate (default: 10)
3. Click **"BULK GENERATE TOKENS"**
4. Tokens are created and ready to distribute

---

## 📈 View Vote Results (Real-Time)

### Option 1: Live Tally
Click **"LIVE TALLY MONITORING"** tab to see vote counts as they happen

### Option 2: Statistics
Click **"STATISTICS & ANALYTICS"** tab for detailed charts and breakdowns

---

## 🔍 Check Your Database (Advanced)

Open browser console (F12 → Console) and type:

```javascript
window.candidates
```

You'll see all candidates in the system with their IDs, names, and vote counts.

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Candidates disappear | Use the updated code - fix is applied ✅ |
| Can't register candidate | Select a portfolio from dropdown first |
| Candidate doesn't appear on voter terminal | Refresh the voter terminal page |
| Votes not counting | Check that voter token is marked as "used" |
| Can't access admin panel | Verify you have the correct passkey |

---

## 📱 How Voters Use the System

1. **Choose Gender** (Male or Female unit)
2. **Enter Token** (given to them)
3. **Vote** (select one candidate per portfolio)
4. **Confirm** (final submission)
5. **Success!** (vote is counted)

---

## What's Fixed Now ✅

**Problem**: First candidate would disappear when adding multiple quickly

**Solution**: Changed ID generation from timestamp-only to:
```
{position}-{candidate-name}-{random-letters}
```

**Result**: No more duplicates, no more disappearing candidates!

---

## 🎯 Pro Tips

✅ **Add portfolio first** - Default portfolios auto-create  
✅ **Add photo** - Helps voters recognize candidates  
✅ **Generate plenty of tokens** - More than expected voters  
✅ **Test before election** - Use test tokens to verify everything works  
✅ **Monitor live tally** - Watch results come in real-time  

---

## Emergency: Wipe System

⚠️ **DANGER ZONE** - Token Management Center has a "Wipe & Clear Cloud System" button

This will delete:
- All candidates
- All votes
- All tokens
- All portfolios

Use only if you need to start completely over!

---

## Still Need Help?

📖 Read these files for more details:
- `CANDIDATE_MANAGEMENT_GUIDE.md` - Complete how-to guide
- `BUG_FIX_EXPLANATION.md` - Technical deep-dive
- `FIX_SUMMARY.md` - What was fixed and why

---

**System Status**: ✅ FIXED - Ready for production use!
