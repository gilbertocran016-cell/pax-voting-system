# 🎫 HOW TO GENERATE AND USE VOTER TOKENS

## What Are Tokens?
Voter tokens are **unique codes** that each voter must enter to access the voting booth. 
- Each token can only be used **once**
- Format: `XXXX-XXXX` (example: `A7K9M-P4L8R`)
- Tied to a specific gender unit (Male or Female)

---

## 📍 WHERE TO GET TOKENS

### Step 1: Go to Admin Panel
```
https://pax-voting-system.vercel.app/admin.html
```

### Step 2: Login
- Enter your **Master Passkey**
- Click **"Verify Admin Passkey"**

### Step 3: Click "TOKEN MANAGEMENT CENTER" Tab

You'll see a section that looks like:
```
┌─────────────────────────────────────────┐
│  GENERATE TOKEN BATCHES                 │
│                                          │
│  Framework Profile: [Male Unit ▼]       │
│  Batch Size: [10]                       │
│                                          │
│  [BULK GENERATE TOKENS]                 │
└─────────────────────────────────────────┘
```

---

## 🔑 HOW TO GENERATE TOKENS

### Simple Way (10 Male Tokens):

1. **Framework Profile**: Leave as "Male Unit"
2. **Batch Size**: `10` (default)
3. Click **"BULK GENERATE TOKENS"**
4. ✅ Success message appears
5. Tokens are generated!

### Generate for Females:

1. **Framework Profile**: Click dropdown → Select **"Female Unit"**
2. **Batch Size**: Enter number (e.g., `15`)
3. Click **"BULK GENERATE TOKENS"**
4. ✅ 15 female voter tokens created

### Generate Large Batches:

1. **Framework Profile**: "Male Unit"
2. **Batch Size**: `50` (or whatever number you need)
3. Click **"BULK GENERATE TOKENS"**
4. ✅ 50 tokens generated
5. Repeat for Female Unit

---

## 📋 EXAMPLE TOKEN GENERATION WORKFLOW

### Your Election Setup:
- Expected Male Voters: 100
- Expected Female Voters: 100

### Generation Steps:

**Step 1: Generate Male Tokens**
1. Framework: Male Unit
2. Batch Size: 110 (extra 10% buffer)
3. Click: GENERATE
4. ✅ See tokens list below

**Step 2: Generate Female Tokens**
1. Framework: Female Unit
2. Batch Size: 110
3. Click: GENERATE
4. ✅ 110 more tokens created

**Total**: 220 tokens ready

---

## 🎫 VIEWING GENERATED TOKENS

After generating tokens, scroll down in **TOKEN MANAGEMENT CENTER** to see:

```
┌──────────────────────────────────────────┐
│  TOKENS BY STATUS                        │
│                                          │
│  Male Tokens (Unused):                  │
│  [A7K9M-P4L8R] [B2J5R-X9K3L] [...]      │
│                                          │
│  Female Tokens (Unused):                │
│  [N4M8P-R7L2X] [W5K9J-L3M8Q] [...]      │
│                                          │
│  Used Tokens:                           │
│  (None yet - appears after voting)      │
└──────────────────────────────────────────┘
```

---

## 📝 HOW TO DISTRIBUTE TOKENS

### Option 1: Print & Distribute
1. Copy token codes from the admin panel
2. Print on paper
3. Distribute to voters
4. Voter enters token at voting booth

### Option 2: Digital Distribution
1. Take screenshot of tokens
2. Email or SMS to voters
3. Voter types token into booth

### Option 3: Check-In Process
1. Voter comes to voting location
2. Check their name on list
3. Give them their token code
4. They vote using that token

---

## 🔍 MONITORING TOKEN USAGE

### In Admin Panel:

1. **LIVE TALLY MONITORING** Tab
   - Shows: "Tokens Used: X of Y"
   - Live percentage turnout

2. **TOKEN MANAGEMENT CENTER** Tab
   - Green tokens = Not used yet
   - Red tokens = Already used

3. **STATISTICS & ANALYTICS** Tab
   - Voter Turnout %
   - Tokens Used count
   - Breakdown by gender

---

## ⚠️ IMPORTANT NOTES

### Token Security
- ✅ Each token can only be used **once**
- ✅ After voting, token is marked "used"
- ✅ Same token cannot be reused
- ⚠️ Do NOT share the same token to multiple voters

### Token Generation Tips
- Generate **20% extra** tokens as buffer
- Example: 100 expected voters → Generate 120 tokens
- Better to have extra than run out
- Unused tokens don't hurt

### If You Run Out of Tokens
1. Go back to TOKEN MANAGEMENT
2. Generate more tokens
3. Distribute the new codes to voters
4. System will accept them

### If You Need to Start Over
1. TOKEN MANAGEMENT CENTER → Bottom section
2. Click **"Wipe & Clear Cloud System"** ⚠️
3. **WARNING**: This deletes ALL data:
   - All candidates
   - All votes
   - All tokens
4. Use only if absolutely necessary

---

## 📊 EXAMPLE: FULL WORKFLOW

### Before Election:
1. Go to Admin → Token Management
2. Generate 60 Male tokens
3. Generate 60 Female tokens
4. Print or note down all 120 tokens

### During Election:
1. Voter arrives
2. Check gender/unit
3. Give them a token from appropriate list
4. They go to voting terminal
5. Enter token at `https://pax-voting-system.vercel.app/`
6. Vote for their candidates
7. Submit ballot
8. Token marked as "used" ✅

### After Election:
1. Check **STATISTICS & ANALYTICS**
2. See final vote counts
3. 120 tokens issued, ~X% used = Turnout

---

## 🎯 QUICK CHECKLIST

**Before Voting Starts:**
- [ ] Admin panel tested
- [ ] Candidates created/visible
- [ ] Male tokens generated (50+)
- [ ] Female tokens generated (50+)
- [ ] Tokens printed or copied
- [ ] Voters know their token
- [ ] Voter terminal tested

**During Voting:**
- [ ] Watch Live Tally for votes
- [ ] Track token usage
- [ ] Monitor system performance
- [ ] Have backup passkey ready

**After Voting:**
- [ ] Check final statistics
- [ ] Export results if needed
- [ ] Verify token count matches

---

## 🚨 TROUBLESHOOTING

### Problem: "Token not found" error
**Solution**: 
- Verify voter entered token correctly (no typos)
- Check that token was actually generated
- Try generating new batch of tokens

### Problem: Token used twice
**Solution**:
- System prevents this automatically
- Second use will be rejected with message
- Give voter a new token instead

### Problem: Can't find token generation
**Solution**:
1. Go to Admin: `admin.html`
2. Login with passkey
3. Click **"TOKEN MANAGEMENT CENTER"** (4th tab)
4. Should see generation form at top

### Problem: Generated too many tokens
**Solution**:
- Not a problem - unused tokens don't hurt
- Just don't distribute the extra ones
- They'll stay in system but unused

---

## 📱 VOTER EXPERIENCE WITH TOKENS

### Voter's Perspective:
1. I get token code: `A7K9M-P4L8R`
2. I go to voting website
3. Select my gender (Male/Female)
4. I type my token code
5. I can now vote!
6. I select candidates
7. I submit my ballot
8. My token is now "used"

---

## ✅ SYSTEM IS READY!

With 3 candidates per portfolio and the token system, you're all set!

**Next Step**: Test everything and deploy!
