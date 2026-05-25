/* ===== Voluntier — Pure JS (localStorage as fake DB) ===== */

function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function load(key, fallback) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}
function qs(name) { return new URLSearchParams(location.search).get(name); }
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ---------- Seed ---------- */
function seedData() {
  if (localStorage.getItem('seedVersion') === 'v3') return;
  // Sample Datasets
  save('opportunities', [
    { id: 1, title: 'Beach Clean-up Drive', org: 'Green Earth PH', orgId: 1, category: 'Environmental', location: 'Manila Bay', date: '2026-06-12', points: 50, image: 'images/thumbnail1-1.jpg',
      description: 'Join us for a sunrise clean-up along Manila Bay. Gloves, sacks and refreshments will be provided. Help us keep our coastlines plastic-free and protect marine life.',
      perks: ['Free t-shirt', 'Snacks & water', 'Certificate'] },
    { id: 2, title: 'Animal Rescue Volunteer', org: 'Paws Rescue', orgId: 2, category: 'Rescue', location: 'Quezon City', date: '2026-06-18', points: 40, image: 'images/thumbnail2-1.jpg',
      description: 'Help feed, bathe and socialize rescued cats and dogs at our QC shelter. No experience needed — just a kind heart and steady hands.',
      perks: ['Shelter tour', 'Adoption priority', 'Photos with the pups'] },
    { id: 3, title: 'First Aid Training', org: 'Red Cross', orgId: 3, category: 'First Aid', location: 'Makati', date: '2026-06-22', points: 60, image: 'images/thumbnail3-1.jpg',
      description: 'A free 1-day certified first-aid workshop covering CPR, bleeding control, and emergency response. Open to all ages 16+.',
      perks: ['Official certificate', 'Free training kit', 'Lunch included'] },
    { id: 4, title: 'Community Feeding', org: 'Hope Kitchen', orgId: 4, category: 'Feeding Program', location: 'Pasig', date: '2026-06-25', points: 45, image: 'images/thumbnail4-1.jpg',
      description: 'Prepare and serve warm meals to 200+ children in Pasig. Volunteers help with cooking, packing, and serving the community.',
      perks: ['Apron & cap', 'Meals provided', 'Group photo'] },
    { id: 5, title: 'Tree Planting', org: 'Green Earth PH', orgId: 1, category: 'Environmental', location: 'Antipolo', date: '2026-07-02', points: 55, image: 'images/thumbnail1-2.jpg',
      description: 'Plant 1,000 native saplings in the Antipolo highlands. Transportation from QC provided. Wear sturdy shoes and bring sunblock.',
      perks: ['Transport', 'Free shirt', 'Tree dedication'] },
    { id: 6, title: 'Bottle Recycling ', org: 'Green Earth PH', orgId: 1, category: 'Environmental', location: 'Cavite', date: '2026-08-04', points: 70, image: 'images/thumbnail1-3.jpg',
      description: 'Collection and segregation of water bottles, and transfer them to the warehouse.',
      perks: ['Transport', 'Snacks & water', 'Free shirt and towel'] },
    { id: 7, title: 'Pet Vaccination', org: 'Paws Rescue', orgId:2, category: 'Rescue', location: 'Quezon City', date: '2026-07-02', points: 65, image: 'images/thumbnail2-2.jpg',
      description: 'Help with setting up the vaccination site, help veterinarians with administering vaccine, and cleaning the area.',
      perks: ['Transport', 'Free Anti Rabies Vaccination', 'Food and Snacks'] },
    { id: 8, title: 'Hunger Relief PRogram', org: 'Project Pearl', orgId:5, category: 'Feeding Program', location: 'Tondo, Manila', date: '2026-09-12', points: 40, image: 'images/thumbnail4-2.jpg',
      description: 'Prepare meals for 150+ children, set up the station, and distribute food.',
      perks: ['Apron and Cap', 'Transport', 'Food and Snacks'] },
    { id: 9, title: 'Blood Letting Campaign', org: 'Red Cross', orgId:3, category: 'First Aid', location: 'Quezon City', date: '2026-09-21', points: 55, image: 'images/thumbnail3-2.jpg',
      description: 'Help donate blood to those in need. Available for healthy individuals over the age of 18+ with no recent medical complications.',
      perks: ['Seminar', 'Free Blood Analysis', 'Water'] },
    { id: 10, title: 'Relief Good Distribution', org: 'Angat Life PH', orgId:6, category: 'Humanitarian Aid', location: 'Penarrubia, La Paz', date: '2026-10-09', points: 80, image: 'images/thumbnail5-1.jpg',
      description: 'Help with setting up the site, trasport the relief goods, and distribute.',
      perks: ['Transport', 'Free shirt', 'Food and Snacks'] }
  ]);

  save('organizations', [
    { id: 1, name: 'Green Earth PH', cause: 'Environmental', emoji: '🌱',
      tagline: 'Restoring nature, one volunteer at a time.',
      about: 'A nationwide environmental network running clean-ups, reforestation, and zero-waste education since 2014.',
      community: 'Metro Manila · Rizal · Laguna',
      officers: [{ name: 'Liana Cruz', role: 'President' }, { name: 'Marco Reyes', role: 'Vice President' }, { name: 'Joy Tan', role: 'Secretary' }],
      members: ['Maya', 'Carlo', 'Anna', 'Bea', 'Diego', 'Ella', 'Frank', 'Gia'] },
    { id: 2, name: 'Paws Rescue', cause: 'Rescue', emoji: '🐾',
      tagline: 'Every paw deserves a second chance.',
      about: 'Independent rescue group caring for over 300 abandoned cats and dogs across Quezon City.',
      community: 'Quezon City · Marikina',
      officers: [{ name: 'Rina Santos', role: 'Founder' }, { name: 'Paolo Lim', role: 'Operations Lead' }],
      members: ['Sam', 'Tina', 'Uma', 'Vito', 'Wendy'] },
    { id: 3, name: 'Red Cross', cause: 'First Aid', emoji: '⛑',
      tagline: 'Trained hands save lives.',
      about: 'Volunteer-driven first response, blood services and disaster relief partner.',
      community: 'Nationwide · 60+ chapters',
      officers: [{ name: 'Dr. Elena Mercado', role: 'Chapter Head' }, { name: 'Noel Yap', role: 'Training Officer' }],
      members: ['Alex', 'Brian', 'Cha', 'Dani', 'Erik', 'Faye'] },
    { id: 4, name: 'Hope Kitchen', cause: 'Feeding Program', emoji: '🍲',
      tagline: 'No child should go to bed hungry.',
      about: 'Community kitchen serving 1,500 hot meals weekly to children in low-income barangays.',
      community: 'Pasig · Mandaluyong',
      officers: [{ name: 'Tita Rose', role: 'Head Cook' }, { name: 'JM Aquino', role: 'Logistics' }],
      members: ['Kira', 'Leo', 'Mina', 'Nico', 'Owen'] },
    { id: 5, name: 'Project Pearl', cause: 'Feeding Program', emoji: '🍲',
      tagline: 'We are smarter when there is no hunger.',
      about: 'An organization of concerned individuals who wants to provide food to children in low-income barangays.',
      community: 'Manila',
      officers: [{ name: 'Ate Mina', role: 'Head Cook' }, { name: 'JJ Recto', role: 'Logistics' }],
      members: ['Kyle', 'Rina', 'Jay', 'Mark', 'Owen'] },
    { id: 6, name: 'Angat Life PH', cause: 'Humanitarian Aid', emoji: '⛑',
      tagline: 'Lets help ech other in these trying times.',
      about: 'Volunteer-driven organization that holds seminars, provides relief to areas struck by disasters.',
      community: 'Laguna · Manila',
      officers: [{ name: 'Lenny Roberts', role: 'President' }, { name: 'Mark Guzman', role: 'Vice President' }],
      members: ['Kira', 'Tina', 'Cha', 'Anna', 'Carlo'] }
    
  ]);

  save('forums', [
    { id: 1, title: 'Tips for first-time volunteers?', author: 'Maya', body: "I'm joining my first clean-up next weekend. Any advice on what to bring or expect?", createdAt: '2026-05-20', reactions: { '👍': 12, '❤️': 5, '🎉': 2 },
      replies: [
        { author: 'Carlo', body: 'Bring water, sunscreen, and closed shoes. Most orgs provide gloves!', at: '2026-05-20' },
        { author: 'Anna', body: 'Arrive 15 minutes early — orientation is short but important.', at: '2026-05-21' }
      ] },
    { id: 2, title: 'What to bring to a beach clean-up', author: 'Carlo', body: 'Sharing my checklist for Manila Bay clean-ups.', createdAt: '2026-05-18', reactions: { '👍': 8, '❤️': 3, '🎉': 1 },
      replies: [{ author: 'Maya', body: 'Saving this, thanks!', at: '2026-05-18' }] },
    { id: 3, title: 'Best organizations for students', author: 'Anna', body: 'Looking for orgs that welcome high-school volunteers on weekends.', createdAt: '2026-05-15', reactions: { '👍': 20, '❤️': 9, '🎉': 4 },
      replies: [
        { author: 'Diego', body: 'Red Cross has a youth program — highly recommend.', at: '2026-05-16' },
        { author: 'Bea', body: 'Green Earth PH does Saturday tree plantings.', at: '2026-05-17' },
        { author: 'Ella', body: 'Hope Kitchen on Sundays is beginner-friendly.', at: '2026-05-17' }
      ] }
  ]);

  save('events', [
    { id: 1, title: 'Volunteer Fair 2026', date: '2026-06-15', location: 'UP Diliman' },
    { id: 2, title: 'Red Cross Open Day', date: '2026-06-29', location: 'Makati HQ' }
  ]);

  if (!localStorage.getItem('user')) save('user', null);
  if (!localStorage.getItem('contributions')) save('contributions', []);
  localStorage.setItem('seedVersion', 'v3');
}
seedData();

/* ---------- Reveal-on-scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);

/* ---------- Opportunities ---------- */
function renderOpportunities(containerId, filter) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let list = load('opportunities', []);
  if (filter && filter !== 'all') list = list.filter(o => o.category === filter);

  // active button styling
  document.querySelectorAll('[data-filter]').forEach(b => {
    b.classList.toggle('btn-active', b.dataset.filter === (filter || 'all'));
  });

  el.innerHTML = list.map((o, i) => `
    <a class="card card-link reveal" style="animation-delay:${i*60}ms" href="opportunity.html?id=${o.id}">
      <div class="card-media"><img src="${esc(o.image)}" alt="${esc(o.title)}"></div>
      <div class="card-body">
        <span class="tag accent">${esc(o.category)}</span>
        <h3>${esc(o.title)}</h3>
        <div class="meta">${esc(o.org)} · ${esc(o.location)} · ${esc(o.date)}</div>
        <p class="muted">+${o.points} contribution points</p>
        <span class="link-arrow">View details →</span>
      </div>
    </a>
  `).join('');
  initReveal();
}

function renderOpportunityDetail() {
  const id = parseInt(qs('id'), 10);
  const opp = load('opportunities', []).find(o => o.id === id);
  const el = document.getElementById('opp-detail');
  if (!el) return;
  if (!opp) { el.innerHTML = '<p>Opportunity not found. <a href="opportunities.html">Back to list</a></p>'; return; }
  const org = load('organizations', []).find(o => o.id === opp.orgId);
  el.innerHTML = `
    <div class="detail-hero reveal">
      <img src="${esc(opp.image)}" alt="${esc(opp.title)}">
      <div class="detail-hero-overlay">
        <span class="tag accent">${esc(opp.category)}</span>
        <h1>${esc(opp.title)}</h1>
        <div class="meta light">${esc(opp.org)} · ${esc(opp.location)} · ${esc(opp.date)}</div>
      </div>
    </div>
    <div class="detail-grid">
      <div class="reveal">
        <h2 class="section-title">About this mission</h2>
        <p>${esc(opp.description)}</p>
        <h3 style="margin-top:24px">What you get</h3>
        <ul class="perks">${opp.perks.map(p => `<li>✓ ${esc(p)}</li>`).join('')}</ul>
        <button class="btn btn-lg" onclick="joinMission(${opp.id})">Join this mission · +${opp.points} pts</button>
      </div>
      <aside class="reveal">
        <div class="side-card">
          <div class="meta">Hosted by</div>
          <h3 style="margin:4px 0 6px">${esc(opp.org)}</h3>
          ${org ? `<p class="muted">${esc(org.tagline)}</p>
            <a class="btn btn-outline" href="organization.html?id=${org.id}">View organization →</a>` : ''}
        </div>
        <div class="side-card">
          <div class="meta">When</div><h3 style="margin:4px 0 12px">${esc(opp.date)}</h3>
          <div class="meta">Where</div><h3 style="margin:4px 0">${esc(opp.location)}</h3>
        </div>
      </aside>
    </div>`;
  initReveal();
}

function joinMission(id) {
  const user = load('user', null);
  if (!user) { alert('Please sign up or log in first!'); window.location.href = 'login.html'; return; }
  const opp = load('opportunities', []).find(o => o.id === id);
  const c = load('contributions', []);
  if (c.some(x => x.id === id)) { alert('You already joined this mission!'); return; }
  c.push({ ...opp, joinedAt: new Date().toLocaleDateString() });
  save('contributions', c);
  user.points = (user.points || 0) + opp.points;
  save('user', user);
  alert(`Joined "${opp.title}"! You earned ${opp.points} points.`);
}

/* ---------- Organizations ---------- */
function renderOrganizations(containerId, filter) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let list = load('organizations', []);
  if (filter && filter !== 'all') list = list.filter(o => o.cause === filter);
  document.querySelectorAll('[data-org-filter]').forEach(b => {
    b.classList.toggle('btn-active', b.dataset.orgFilter === (filter || 'all'));
  });
  el.innerHTML = list.map((o, i) => `
    <a class="card card-link org-card reveal" style="animation-delay:${i*70}ms" href="organization.html?id=${o.id}">
      <div class="org-emoji">${o.emoji}</div>
      <h3>${esc(o.name)}</h3>
      <span class="tag accent">${esc(o.cause)}</span>
      <p class="muted">${esc(o.tagline)}</p>
      <div class="meta">${o.members.length + o.officers.length} members · ${esc(o.community)}</div>
      <span class="link-arrow">View organization →</span>
    </a>
  `).join('');
  initReveal();
}

function renderOrganizationDetail() {
  const id = parseInt(qs('id'), 10);
  const org = load('organizations', []).find(o => o.id === id);
  const el = document.getElementById('org-detail');
  if (!el) return;
  if (!org) { el.innerHTML = '<p>Organization not found. <a href="organizations.html">Back</a></p>'; return; }
  const opps = load('opportunities', []).filter(o => o.orgId === id);
  el.innerHTML = `
    <div class="org-hero reveal">
      <div class="org-hero-emoji">${org.emoji}</div>
      <div>
        <span class="tag accent">${esc(org.cause)}</span>
        <h1>${esc(org.name)}</h1>
        <p class="muted">${esc(org.tagline)}</p>
        <div class="meta">📍 ${esc(org.community)}</div>
      </div>
    </div>

    <section class="reveal">
      <h2 class="section-title">About</h2>
      <p>${esc(org.about)}</p>
    </section>

    <section class="reveal">
      <h2 class="section-title">Officers</h2>
      <div class="grid people-grid">
        ${org.officers.map(p => `
          <div class="person card">
            <div class="avatar avatar-md">${esc(p.name[0])}</div>
            <h3>${esc(p.name)}</h3>
            <div class="meta">${esc(p.role)}</div>
          </div>`).join('')}
      </div>
    </section>

    <section class="reveal">
      <h2 class="section-title">Members</h2>
      <div class="member-row">
        ${org.members.map(m => `<div class="member-chip"><span class="avatar avatar-sm">${esc(m[0])}</span>${esc(m)}</div>`).join('')}
      </div>
    </section>

    <section class="reveal">
      <h2 class="section-title">Active missions</h2>
      <div class="grid">
        ${opps.length ? opps.map(o => `
          <a class="card card-link" href="opportunity.html?id=${o.id}">
            <div class="card-media"><img src="${esc(o.image)}" alt=""></div>
            <div class="card-body">
              <h3>${esc(o.title)}</h3>
              <div class="meta">${esc(o.location)} · ${esc(o.date)}</div>
            </div>
          </a>`).join('') : '<p class="muted">No active missions yet.</p>'}
      </div>
    </section>`;
  initReveal();
}

/* ---------- Forums ---------- */
function renderForums(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = load('forums', []);
  el.innerHTML = list.map((f, i) => `
    <a class="forum-post forum-link reveal" style="animation-delay:${i*60}ms" href="forum.html?id=${f.id}">
      <div class="forum-row">
        <div class="avatar avatar-sm">${esc(f.author[0])}</div>
        <div style="flex:1">
          <h3>${esc(f.title)}</h3>
          <div class="author">By ${esc(f.author)} · ${f.replies.length} replies · ${esc(f.createdAt)}</div>
        </div>
        <div class="reaction-summary">
          ${Object.entries(f.reactions).map(([e,c]) => `<span>${e} ${c}</span>`).join('')}
        </div>
      </div>
    </a>
  `).join('');
  initReveal();
}

function addForumPost(e) {
  e.preventDefault();
  const user = load('user', null);
  if (!user) { alert('Please log in first!'); return; }
  const title = document.getElementById('post-title').value.trim();
  if (!title) return;
  const list = load('forums', []);
  list.unshift({ id: Date.now(), title, author: user.name, body: title, createdAt: new Date().toISOString().slice(0,10), reactions: { '👍':0,'❤️':0,'🎉':0 }, replies: [] });
  save('forums', list);
  document.getElementById('post-title').value = '';
  renderForums('forum-list');
}

function renderForumDetail() {
  const id = parseInt(qs('id'), 10);
  const list = load('forums', []);
  const f = list.find(x => x.id === id);
  const el = document.getElementById('forum-detail');
  if (!el) return;
  if (!f) { el.innerHTML = '<p>Topic not found. <a href="forums.html">Back to forums</a></p>'; return; }
  el.innerHTML = `
    <div class="forum-detail reveal">
      <a href="forums.html" class="link-arrow">← Back to forums</a>
      <h1 class="section-title" style="margin-top:8px">${esc(f.title)}</h1>
      <div class="author-row">
        <div class="avatar avatar-md">${esc(f.author[0])}</div>
        <div><strong>${esc(f.author)}</strong><div class="meta">${esc(f.createdAt)}</div></div>
      </div>
      <p style="margin-top:14px">${esc(f.body)}</p>
      <div class="reactions">
        ${Object.entries(f.reactions).map(([e,c]) => `
          <button class="reaction-btn" onclick="react(${f.id},'${e}')"><span class="emoji">${e}</span><span class="count">${c}</span></button>
        `).join('')}
      </div>
    </div>

    <h2 class="section-title reveal" style="margin-top:32px">Replies (${f.replies.length})</h2>
    <div id="reply-list">
      ${f.replies.map((r,i) => `
        <div class="reply reveal" style="animation-delay:${i*50}ms">
          <div class="avatar avatar-sm">${esc(r.author[0])}</div>
          <div style="flex:1">
            <div class="author-row-inline"><strong>${esc(r.author)}</strong><span class="meta">· ${esc(r.at)}</span></div>
            <p>${esc(r.body)}</p>
          </div>
        </div>`).join('')}
    </div>

    <form class="form reveal" onsubmit="addReply(event, ${f.id})" style="margin-top:24px">
      <label for="reply-body">Write a reply</label>
      <textarea id="reply-body" rows="3" placeholder="Share your thoughts..."></textarea>
      <button type="submit" class="btn">Post reply</button>
    </form>`;
  initReveal();
}

function react(forumId, emoji) {
  const list = load('forums', []);
  const f = list.find(x => x.id === forumId);
  if (!f) return;
  f.reactions[emoji] = (f.reactions[emoji] || 0) + 1;
  save('forums', list);
  renderForumDetail();
}

function addReply(e, forumId) {
  e.preventDefault();
  const user = load('user', null);
  if (!user) { alert('Please log in first!'); return; }
  const body = document.getElementById('reply-body').value.trim();
  if (!body) return;
  const list = load('forums', []);
  const f = list.find(x => x.id === forumId);
  f.replies.push({ author: user.name, body, at: new Date().toISOString().slice(0,10) });
  save('forums', list);
  renderForumDetail();
}

/* ---------- Events ---------- */
function renderEvents(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = load('events', []);
  el.innerHTML = list.map((e, i) => `
    <div class="card reveal" style="animation-delay:${i*60}ms">
      <div class="card-body">
        <h3>${esc(e.title)}</h3>
        <div class="meta">${esc(e.date)} · ${esc(e.location)}</div>
      </div>
    </div>
  `).join('');
  initReveal();
}

/* ---------- Auth ---------- */
function signup(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (!name || !email || password.length < 6) {
    alert('Please fill all fields. Password must be at least 6 characters.'); return;
  }
  save('user', { name, email, points: 0 });
  alert('Welcome, ' + name + '!');
  window.location.href = 'profile.html';
}
function login(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const existing = load('user', null);
  if (existing && existing.email === email) {
    alert('Welcome back, ' + existing.name + '!');
    window.location.href = 'profile.html';
  } else {
    alert('No account found. Please sign up first.');
  }
}
function logout() { alert('Logged out.'); window.location.href = 'index.html'; }

/* ---------- Profile ---------- */
function renderProfile() {
  const user = load('user', null);
  if (!user) { window.location.href = 'login.html'; return; }
  document.getElementById('p-name').textContent = user.name;
  document.getElementById('p-email').textContent = user.email;
  document.getElementById('p-initial').textContent = user.name[0].toUpperCase();
  document.getElementById('p-points').textContent = user.points || 0;
  const c = load('contributions', []);
  document.getElementById('p-count').textContent = c.length;
  const listEl = document.getElementById('p-contribs');
  listEl.innerHTML = c.length === 0
    ? '<p class="meta">No contributions yet. Join a mission!</p>'
    : c.map(x => `<div class="forum-post"><h3>${esc(x.title)}</h3><div class="author">${esc(x.org)} · ${esc(x.joinedAt)} · +${x.points} pts</div></div>`).join('');
}

function sendContact(e) { e.preventDefault(); alert('Thanks! Your message has been sent.'); e.target.reset(); }
