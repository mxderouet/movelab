export const GENRES = {
  house: {
    label: "House",
    color: "#FF7700",
    bpm: { min: 120, max: 130, sweet: 125 },
    feel: "4/4 groovy, light swing, kick on every beat",
    drumVariations: [
      {
        label: "V1 — Classic 4/4",
        kick:    [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare:   [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat:   [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        openhat: [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        clap:    [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      },
      {
        label: "V2 — Syncopated",
        kick:    [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0],
        snare:   [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0],
        hihat:   [1,1,0,1, 1,0,1,1, 1,1,0,1, 1,0,1,0],
        openhat: [0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,1],
        clap:    [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,1,0],
      },
      {
        label: "V3 — Deep Groove",
        kick:    [1,0,0,1, 0,0,1,0, 1,0,0,0, 0,1,0,0],
        snare:   [0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0],
        hihat:   [1,0,1,0, 1,0,1,0, 1,0,1,1, 1,0,1,0],
        openhat: [0,0,0,0, 0,1,0,0, 0,0,0,0, 0,0,1,0],
        clap:    [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1],
      },
    ],
    bassPatterns: [
      {
        label: "B1 — Root Held",
        steps: ["C2",null,null,null,null,null,null,null, "C2",null,null,null,null,null,null,null],
        desc: "Long root note on beat 1, silence, repeat on bar 2. Simple and effective.",
      },
      {
        label: "B2 — Walking",
        steps: ["C2",null,"E2",null,"G2",null,"A2",null, "G2",null,"E2",null,"C2",null,null,null],
        desc: "Walks up and down the octave. 4–5 notes. Very musical.",
      },
      {
        label: "B3 — Pump",
        steps: ["C2","C2",null,"C2",null,"C2","C2",null, "C2","C2",null,"C2",null,null,"C2",null],
        desc: "Root repeated rhythmically. Follows the kick. Drives the dancefloor.",
      },
    ],
    tracks: [
      { slot: "Track 3", role: "Harmony / Chords", suggestions: [
        { name: "Vintage Keys",  type: "Keys", desc: "Electric piano Rhodes style. Open chords with heavy reverb." },
        { name: "Mellow Pad",    type: "Pad",  desc: "Soft background pad. Filter slightly open, slow attack." },
        { name: "Soulful Organ", type: "Keys", desc: "Hammond organ for passing chords. 2–3 notes max." },
      ]},
      { slot: "Track 4", role: "Melody / Lead", suggestions: [
        { name: "Pluck Lead",  type: "Pluck", desc: "Short and sharp. Repetitive 4–8 note riff. Hypnotic engine." },
        { name: "Acid Line",   type: "Synth", desc: "303-style. Filter sweep. Play the resonance live." },
        { name: "Stab Chord",  type: "Synth", desc: "Short syncopated chords. Lands on the offbeats." },
      ]},
    ],
    tip: "The groove comes from hihat swing and the kick/bass relationship. Start simple.",
    workflow: [
      { n: "1", t: "Lay down the drum groove", d: "Kick + snare minimal. No hihat yet." },
      { n: "2", t: "Add the bass",              d: "One note that grooves with the kick." },
      { n: "3", t: "Complete the drums",        d: "Hi-hat and percs once kick/bass sounds right." },
      { n: "4", t: "Track 3 — harmony",         d: "Pad or keys. Simple. 2–4 notes max." },
      { n: "5", t: "Track 4 — melody",          d: "Lead or pluck. Short repeated motif." },
      { n: "6", t: "Structure",                 d: "Arrange intro/drop/break. Copy clips, modify them." },
      { n: "7", t: "Automate",                  d: "Filter, volume, effects. Life comes from automation." },
    ],
    structure: [
      { name: "Intro",   bars: "8–16",  desc: "Kick alone or with hihat. No melody. Build tension." },
      { name: "Build",   bars: "8",     desc: "Add open hi-hat + perc. Energy rises." },
      { name: "Drop",    bars: "16–32", desc: "Full pattern. Bass enters. Main synth." },
      { name: "Break",   bars: "8–16",  desc: "Remove the kick. Melody alone or atmosphere." },
      { name: "Build 2", bars: "8",     desc: "Rise again with filter on bass. Anticipation." },
      { name: "Drop 2",  bars: "16–32", desc: "Full return with variation (new sound, effect)." },
      { name: "Outro",   bars: "8–16",  desc: "Progressive strip-back. Kick alone last. Fade." },
    ],
    bassTechniques: [
      "Long root note on beat 1",
      "Short ghost note on beat 3",
      "Slide into the root note",
      "Slow LFO on filter",
    ],
  },

  techno: {
    label: "Techno",
    color: "#00AAFF",
    bpm: { min: 130, max: 150, sweet: 138 },
    feel: "Industrial, linear, hypnotic. Solid 4-on-the-floor kick.",
    drumVariations: [
      {
        label: "V1 — Minimal",
        kick:    [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        hihat:   [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1],
        openhat: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        clap:    [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1],
      },
      {
        label: "V2 — Industrial",
        kick:    [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare:   [0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,1],
        hihat:   [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,1,1,0],
        openhat: [0,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,0,0],
        clap:    [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      },
      {
        label: "V3 — Driving",
        kick:    [1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,0,0],
        snare:   [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,1,0],
        hihat:   [1,1,1,1, 0,1,1,1, 1,1,1,1, 0,1,1,1],
        openhat: [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,1],
        clap:    [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      },
    ],
    bassPatterns: [
      {
        label: "B1 — Mono Repeat",
        steps: ["C1",null,"C1",null,null,"C1",null,null, "C1",null,"C1",null,null,null,"C1",null],
        desc: "Single note repeated rhythmically. Hypnotic by definition.",
      },
      {
        label: "B2 — Fifth Drop",
        steps: ["C1",null,null,null,"G0",null,null,null, "C1",null,null,null,"G0",null,"G0",null],
        desc: "Root + low fifth. Maximum tension. Very Berghain.",
      },
      {
        label: "B3 — Chromatic Crawl",
        steps: ["C1",null,"B0",null,"Bb0",null,null,null, "C1",null,null,null,null,null,null,null],
        desc: "Slow chromatic descent. Builds pressure over 2 bars.",
      },
    ],
    tracks: [
      { slot: "Track 3", role: "Texture / Atmosphere", suggestions: [
        { name: "Dark Pad",        type: "Pad",   desc: "Long dark pad. Filter closed, opens slowly over 8 bars." },
        { name: "Noise Sweep",     type: "Synth", desc: "Filtered white noise. Automate the cutoff for builds." },
        { name: "Industrial Stab", type: "Synth", desc: "Short metallic chord. On offbeats, used sparingly." },
      ]},
      { slot: "Track 4", role: "Lead / Motif", suggestions: [
        { name: "Acid Lead", type: "Synth", desc: "303-style with high resonance. Filter swept manually." },
        { name: "Mono Lead", type: "Lead",  desc: "Hard mono synth sound. 2–3 note motif repeated." },
        { name: "FX Riser",  type: "Synth", desc: "8-bar tension rise. No melody, pure energy." },
      ]},
    ],
    tip: "In techno, length is a tool. Don't be afraid of 2-minute intros.",
    workflow: [
      { n: "1", t: "4/4 kick alone",       d: "Long. At least 16 bars. It's intentional." },
      { n: "2", t: "Add hihat",             d: "No snare yet. Let the groove settle." },
      { n: "3", t: "Snare or rimshot",      d: "Pattern becomes complete." },
      { n: "4", t: "Bass enters",           d: "1–2 notes max. Follows the kick." },
      { n: "5", t: "Atmosphere",            d: "Dark pad. Long filter opening progressively." },
      { n: "6", t: "Lead or acid",          d: "Short motif. 2–3 notes. Repeated." },
      { n: "7", t: "Automate everything",   d: "Filter, reverb, delay. Tension comes from automation." },
    ],
    structure: [
      { name: "Intro",   bars: "16–32", desc: "4/4 kick alone. Long. Intentional. Sets the groove." },
      { name: "Layer 1", bars: "16",    desc: "Add hihat or perc. Nothing else yet." },
      { name: "Layer 2", bars: "16",    desc: "Snare or rimshot. Pattern becomes complete." },
      { name: "Drop",    bars: "32–64", desc: "Bass enters. Synth. Track is launched." },
      { name: "Break",   bars: "16",    desc: "Everything stops except atmosphere. Long silence = tension." },
      { name: "Climax",  bars: "32",    desc: "Return with variation. New sound or striking effect." },
      { name: "Outro",   bars: "16–32", desc: "Progressive strip-back. Kick alone. Fade." },
    ],
    bassTechniques: [
      "1–2 notes max, repeated",
      "Light distortion",
      "Sub-bass C0–C1",
      "Filter automation for tension",
    ],
  },

  dub: {
    label: "Dub",
    color: "#00CC66",
    bpm: { min: 60, max: 90, sweet: 75 },
    feel: "Heavy, slow, spatial. Silence is as important as the notes.",
    drumVariations: [
      {
        label: "V1 — Roots One Drop",
        kick:    [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare:   [0,0,0,0, 1,0,0,0, 0,0,0,1, 1,0,0,0],
        hihat:   [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        openhat: [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,1],
        clap:    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
      {
        label: "V2 — Steppers",
        kick:    [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare:   [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat:   [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        openhat: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        clap:    [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
      },
      {
        label: "V3 — Sparse",
        kick:    [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare:   [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        hihat:   [1,0,0,0, 0,1,0,0, 1,0,0,0, 0,1,0,0],
        openhat: [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,1],
        clap:    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    ],
    bassPatterns: [
      {
        label: "B1 — One Drop",
        steps: ["C1",null,null,null,null,null,null,null, null,null,null,null,null,null,null,null],
        desc: "One long note every 2 bars. 1/2-note delay. Space does all the work.",
      },
      {
        label: "B2 — Riddim",
        steps: ["C1",null,"Eb1",null,null,"C1",null,"G1", null,null,null,"C1",null,null,null,null],
        desc: "Minor pentatonic motif. Repeated identically over 2 bars.",
      },
      {
        label: "B3 — Slide",
        steps: ["C1",null,null,null,null,null,null,null, "C1",null,null,null,null,null,null,null],
        desc: "Long portamento between notes. Bass that 'speaks'. Filter opens up.",
      },
    ],
    tracks: [
      { slot: "Track 3", role: "Organ / Keys", suggestions: [
        { name: "Hammond Organ", type: "Keys", desc: "Short syncopated chords. Heavy reverb + delay. Core dub sound." },
        { name: "Dub Piano",     type: "Keys", desc: "Piano with long echo. Play on offbeats only." },
        { name: "Melodica",      type: "Keys", desc: "Warm folk sound. Short phrases with long reverb." },
      ]},
      { slot: "Track 4", role: "FX / Texture", suggestions: [
        { name: "Space Echo", type: "Synth", desc: "Looping delay sound. Not a melody, a background texture." },
        { name: "Dub Siren",  type: "Lead",  desc: "Modulated siren sound. Dub classic. Used rarely but loudly." },
        { name: "Brass Stab", type: "Synth", desc: "Heavily reverbed synthetic brass. Short chord on beats 2 and 4." },
      ]},
    ],
    tip: "In dub, what you remove is as important as what you keep. Less = more.",
    workflow: [
      { n: "1", t: "Drums + bass alone",     d: "The skeleton. Riddim pattern." },
      { n: "2", t: "Organ or piano",          d: "Simple. Heavy reverb." },
      { n: "3", t: "Drop Out",                d: "Everything disappears except bass + kick. Void effect." },
      { n: "4", t: "Effect on bass",          d: "Wah, filter, delay. The bass comes alive." },
      { n: "5", t: "Echo on snare",           d: "Delay on organ. Live effects." },
      { n: "6", t: "Fade",                    d: "Slow strip-back. Bass stays last." },
    ],
    structure: [
      { name: "Riddim",    bars: "8–16",  desc: "Drum/bass pattern alone. The skeleton." },
      { name: "Version 1", bars: "16",    desc: "Organ or piano enters. Simple. Heavy reverb." },
      { name: "Drop Out",  bars: "8",     desc: "Everything disappears except bass + kick. Void effect." },
      { name: "Version 2", bars: "16",    desc: "Return with effect on bass (wah, filter, delay)." },
      { name: "Dub Wise",  bars: "16–32", desc: "Live effects. Echo on snare, delay on organ." },
      { name: "Fade",      bars: "16+",   desc: "Slow strip-back. Bass stays last." },
    ],
    bassTechniques: [
      "1–2 notes per bar max",
      "1/4 or 1/2 note delay",
      "Filter opened/closed by hand",
      "Long reverb with no dry signal",
    ],
  },

  dnb: {
    label: "Drum'n'Bass",
    color: "#FF2266",
    bpm: { min: 160, max: 180, sweet: 170 },
    feel: "Ultra-fast syncopated breakbeat. Kick and snare never where you expect.",
    drumVariations: [
      {
        label: "V1 — Amen Style",
        kick:    [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        snare:   [0,0,0,0, 1,0,0,0, 0,1,0,0, 0,0,1,0],
        hihat:   [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        openhat: [0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,1],
        clap:    [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0],
      },
      {
        label: "V2 — Liquid",
        kick:    [1,0,0,0, 0,0,0,1, 1,0,0,0, 0,1,0,0],
        snare:   [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat:   [1,0,1,1, 1,0,1,0, 1,0,1,1, 1,0,1,0],
        openhat: [0,0,0,0, 0,1,0,0, 0,0,0,0, 0,0,0,1],
        clap:    [0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0],
      },
      {
        label: "V3 — Neurofunk",
        kick:    [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,0],
        snare:   [0,0,1,0, 1,0,0,0, 0,0,1,0, 0,0,0,1],
        hihat:   [1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,1,1],
        openhat: [0,0,0,0, 0,0,1,0, 0,0,0,1, 0,0,0,0],
        clap:    [0,0,0,0, 1,0,0,0, 0,1,0,0, 1,0,1,0],
      },
    ],
    bassPatterns: [
      {
        label: "B1 — Reese",
        steps: ["C1",null,null,null,null,null,null,null, "C1",null,null,"G0",null,null,null,null],
        desc: "Long modulated note. 2 detuned oscillators. Fast LFO on filter.",
      },
      {
        label: "B2 — Rolling",
        steps: ["C1","C1",null,"C1","C1",null,"C1",null, "C1","C1",null,null,"C1","C1",null,null],
        desc: "Bass rolling on offbeats of the break. Main DnB engine.",
      },
      {
        label: "B3 — Jump Up",
        steps: ["C1",null,null,"G0","C1",null,"Bb0",null, "C1",null,null,null,"C1",null,"G0",null],
        desc: "Wide interval jumps. Aggressive. Synced with the snares.",
      },
    ],
    tracks: [
      { slot: "Track 3", role: "Pad / Atmosphere", suggestions: [
        { name: "Cinematic Pad", type: "Pad",   desc: "Wide dark pad. Slow attack. Long sustain. Discreet in the background." },
        { name: "Reese Pad",    type: "Synth", desc: "Same sound as the bass but in the mids. More open filter." },
        { name: "Arp Pluck",    type: "Pluck", desc: "Fast 4–8 note arpeggio. Rhythm that completes the break." },
      ]},
      { slot: "Track 4", role: "Lead / Synth", suggestions: [
        { name: "Neurofunk Lead", type: "Lead",  desc: "Distorted and modulated sound. Short repeated motif. Very aggressive." },
        { name: "Liquid Lead",   type: "Lead",  desc: "Softer and more melodic. 4-bar phrases. For liquid DnB." },
        { name: "Vocal Chop",    type: "Synth", desc: "Rhythmically chopped vocal sample. Completes the break." },
      ]},
    ],
    tip: "The secret of DnB is the breakbeat. Study Amen Break and Think Break as your foundation.",
    workflow: [
      { n: "1", t: "Break alone",          d: "Amen or custom. Sets the tension." },
      { n: "2", t: "Build",                d: "Rising filter. Bass halfway in." },
      { n: "3", t: "Drop",                 d: "Full break + bass. This is where it explodes." },
      { n: "4", t: "Rewind",               d: "Silence or scratch effect. Symbolic return." },
      { n: "5", t: "Drop 2",               d: "Return with variation in bass or effects." },
      { n: "6", t: "Bridge",               d: "Atmosphere alone. Breath between two drops." },
      { n: "7", t: "Outro",                d: "Break alone, slowdown or hard cut." },
    ],
    structure: [
      { name: "Intro",    bars: "8–16",  desc: "Break alone or atmosphere. Sets the tension." },
      { name: "Pre-drop", bars: "4–8",   desc: "Build with rising filter. Bass halfway in." },
      { name: "Drop",     bars: "16–32", desc: "Full break + bass. This is where it explodes." },
      { name: "Rewind",   bars: "4",     desc: "Silence or scratch effect. Symbolic return." },
      { name: "Drop 2",   bars: "16–32", desc: "Return with variation in bass or effects." },
      { name: "Bridge",   bars: "8",     desc: "Atmosphere alone. Breath between two drops." },
      { name: "Outro",    bars: "8–16",  desc: "Break alone, slowdown or hard cut." },
    ],
    bassTechniques: [
      "Reese = 2 detuned oscillators",
      "Separate sub-bass C0",
      "Syncopated rhythm vs break",
      "Fast LFO on filter",
    ],
  },
};

export const ROWS = ["kick", "snare", "hihat", "openhat", "clap"];
export const ROW_LABELS = { kick: "Kick", snare: "Snare", hihat: "Hi-Hat", openhat: "Open", clap: "Clap" };
export const ROW_COLORS = {
  kick:    "#FF7700",
  snare:   "#00AAFF",
  hihat:   "#FFE500",
  openhat: "#AAFFAA",
  clap:    "#FF2266",
};
export const TYPE_COLORS = {
  Keys:  "#FFE500",
  Pad:   "#AAFFAA",
  Synth: "#00AAFF",
  Lead:  "#FF7700",
  Pluck: "#FF2266",
};
