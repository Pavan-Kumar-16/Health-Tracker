// ============================================================
//  data/tasks.js — All task definitions & plan data
//  Edit this file to add, remove or modify tasks/sections.
// ============================================================

const STORAGE_KEY = 'healthtrack_v3';

// Each task: { id, icon, iconColor, title, sub, tag, tagColor }
const TASKS = {
  today: [
    {
      group: 'Morning Routine',
      groupIcon: 'wb_sunny', groupIconColor: 'ic-yellow',
      items: [
        { id: 'c-medicine',    icon: 'medication',      iconColor: 'ic-red',    title: 'Take Levothyroxine',         sub: 'Empty stomach with water — before anything else',          tag: 'FIRST',  tagColor: 'tag-red'    },
        { id: 'c-wait',        icon: 'hourglass_empty', iconColor: 'ic-yellow', title: 'Wait 30–45 mins',            sub: 'No food, coffee or tea during this time',                  tag: 'WAIT',   tagColor: 'tag-yellow' },
        { id: 'c-breakfast',   icon: 'breakfast_dining',iconColor: 'ic-orange', title: 'Breakfast',                  sub: 'Idli / dosa / upma / poha + 1 boiled egg',                 tag: 'EAT',    tagColor: 'tag-green'  },
        { id: 'c-almonds',     icon: 'spa',             iconColor: 'ic-green',  title: '4–5 Almonds',               sub: 'Daily — good for recovery & brain',                        tag: 'DAILY',  tagColor: 'tag-green'  },
      ]
    },
    {
      group: 'Mid-Morning — 11 AM',
      groupIcon: 'partly_cloudy_day', groupIconColor: 'ic-blue',
      items: [
        { id: 'c-fruit',        icon: 'nutrition',      iconColor: 'ic-green',  title: '1 Fruit',                   sub: 'Banana / apple / papaya / orange',                         tag: '11 AM',  tagColor: 'tag-blue'   },
        { id: 'c-walk-morning', icon: 'directions_walk',iconColor: 'ic-orange', title: 'Morning Walk',              sub: '20–30 min brisk walk — helps metabolism & energy',         tag: 'WALK',   tagColor: 'tag-orange' },
      ]
    },
    {
      group: 'Lunch — Hostel Mess',
      groupIcon: 'lunch_dining', groupIconColor: 'ic-orange',
      items: [
        { id: 'c-lunch', icon: 'restaurant',  iconColor: 'ic-green', title: 'Lunch — Rice / Chapati + Dal',  sub: 'Vegetable curry + curd + green veggies if available',       tag: 'MUST',   tagColor: 'tag-green' },
        { id: 'c-fish',  icon: 'set_meal',    iconColor: 'ic-blue',  title: 'Fish Meal (2–3× / week)',       sub: 'Omega-3 & iodine — great for thyroid & recovery',          tag: 'WEEKLY', tagColor: 'tag-blue'  },
      ]
    },
    {
      group: 'Evening Snack',
      groupIcon: 'coffee', groupIconColor: 'ic-yellow',
      items: [
        { id: 'c-snack',        icon: 'grain',          iconColor: 'ic-yellow', title: 'Healthy Snack',             sub: 'Peanuts / roasted chana / boiled corn + max 1 tea/coffee', tag: 'SNACK',   tagColor: 'tag-yellow' },
        { id: 'c-walk-evening', icon: 'nights_stay',    iconColor: 'ic-purple', title: 'Evening Walk',              sub: '15–20 min after snack or before dinner',                  tag: 'WALK',    tagColor: 'tag-orange' },
      ]
    },
    {
      group: 'Dinner',
      groupIcon: 'dinner_dining', groupIconColor: 'ic-purple',
      items: [
        { id: 'c-dinner', icon: 'restaurant_menu', iconColor: 'ic-purple', title: 'Light Dinner', sub: "Chapati + sabzi OR rice + dal — don't overeat", tag: 'LIGHT', tagColor: 'tag-green' },
      ]
    },
    {
      group: 'Before Bed',
      groupIcon: 'bedtime', groupIconColor: 'ic-blue',
      items: [
        { id: 'c-milk', icon: 'local_cafe', iconColor: 'ic-muted', title: 'Warm Milk (optional)', sub: 'Good for recovery & sleep quality', tag: 'OPTIONAL', tagColor: 'tag-purple' },
      ]
    }
  ],

  nutrition: [
    {
      group: 'Must-Eat Foods',
      groupIcon: 'check_circle', groupIconColor: 'ic-green',
      items: [
        { id: 'n-eggs',   icon: 'egg',       iconColor: 'ic-yellow', title: 'Eggs',                    sub: 'Best for recovery — have daily (boiled preferred)',     tag: 'DAILY',     tagColor: 'tag-green' },
        { id: 'n-nuts',   icon: 'spa',       iconColor: 'ic-orange', title: 'Nuts — Almonds & Walnuts',sub: '4–5 almonds daily + walnuts when available',             tag: 'DAILY',     tagColor: 'tag-green' },
        { id: 'n-fruits', icon: 'nutrition', iconColor: 'ic-green',  title: 'Fruits',                  sub: 'Banana, apple, papaya, or orange — 1 per day min',      tag: 'DAILY',     tagColor: 'tag-green' },
        { id: 'n-greens', icon: 'eco',       iconColor: 'ic-green',  title: 'Green Vegetables',        sub: 'Spinach, beans, carrot — include at lunch or dinner',    tag: 'IMPORTANT', tagColor: 'tag-green' },
        { id: 'n-curd',   icon: 'water_drop',iconColor: 'ic-blue',   title: 'Curd / Yogurt',           sub: 'Gut health + calcium — include at lunch daily',          tag: 'GUT',       tagColor: 'tag-blue'  },
        { id: 'n-fish2',  icon: 'set_meal',  iconColor: 'ic-blue',   title: 'Fish',                    sub: 'Omega-3 & iodine — great for thyroid. 2–3× per week',   tag: 'THYROID',   tagColor: 'tag-blue'  },
      ]
    }
  ],

  exercise: [
    {
      group: 'Daily Walking',
      groupIcon: 'directions_walk', groupIconColor: 'ic-orange',
      items: [
        { id: 'e-morning', icon: 'wb_sunny',   iconColor: 'ic-yellow', title: 'Morning Walk', sub: '20–30 min brisk walk — helps metabolism & energy', tag: 'MORNING',  tagColor: 'tag-orange' },
        { id: 'e-evening', icon: 'nights_stay',iconColor: 'ic-purple', title: 'Evening Walk', sub: '15–20 min post-snack walk — aids digestion',        tag: 'EVENING',  tagColor: 'tag-orange' },
      ]
    },
    {
      group: 'Weekly Goals',
      groupIcon: 'flag', groupIconColor: 'ic-green',
      items: [
        { id: 'e-fish-week', icon: 'set_meal', iconColor: 'ic-blue', title: 'Fish Meal This Week', sub: 'Target: 2–3 fish meals per week for thyroid support', tag: 'WEEK', tagColor: 'tag-blue' },
      ]
    }
  ]
};

// Flat list of all task IDs used for progress tracking
const ALL_TASK_IDS = Object.values(TASKS)
  .flat()
  .flatMap(group => group.items)
  .map(item => item.id);

// Static avoid / limit / reminder data (non-checkable)
const AVOID_DATA = {
  avoid: [
    { icon: 'no_food',               title: 'Junk Food — Daily ban',      sub: 'Chips, burgers, Maggi daily — occasional is ok, not a habit' },
    { icon: 'cake',                  title: 'Bakery Items',               sub: 'Cakes, pastries — high refined sugar, bad for thyroid'       },
    { icon: 'local_fire_department', title: 'Deep Fried Foods (excess)',  sub: 'Interferes with nutrient absorption & energy levels'         },
  ],
  limit: [
    { icon: 'grass',  title: 'Soy Products',         sub: "Don't have daily — can interfere with thyroid medicine"    },
    { icon: 'eco',    title: 'Cabbage & Cauliflower', sub: 'Okay if cooked, but not too much — raw goitrogens'         },
    { icon: 'coffee', title: 'Tea / Coffee',          sub: 'Max 1 cup per day — never right after Levothyroxine'       },
  ],
  rules: [
    { icon: 'medication', title: 'No food 30–45 mins after tablet',    sub: 'Empty stomach absorption is critical for Levothyroxine to work' },
    { icon: 'coffee',     title: 'No coffee/tea right after tablet',   sub: 'Caffeine blocks absorption — wait at least 45 minutes'         },
  ]
};

const WALK_TIPS = [
  { icon: 'sprint',   title: 'Walk at a brisk pace',           sub: 'Aim for 30–50 min total per day. Consistency beats intensity.' },
  { icon: 'schedule', title: 'Best time: 45 min after medicine', sub: 'Morning walk can be after breakfast window. Avoid fasted intense exercise.' },
];

const STATS_REMINDERS = [
  { icon: 'track_changes', title: 'Consistency beats perfection', sub: "Even if hostel food is basic — eat regularly, don't skip meals" },
  { icon: 'trending_up',   title: 'Small wins compound',          sub: 'Each checked task = progress. Build the habit daily.'         },
];
