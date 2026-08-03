#!/bin/bash
set -e

echo "=== Harness Initialization ==="

if [ -f package.json ]; then
  PM="npm"
  echo "=== Installing dependencies with $PM ==="
  "$PM" install

  node -e "const s=require('./package.json').scripts||{}; process.exit(s.lint?0:1)" && {
    "$PM" run lint
  }

  node -e "const s=require('./package.json').scripts||{}; process.exit(s.test?0:1)" && {
    "$PM" test
  }

  node -e "const s=require('./package.json').scripts||{}; process.exit(s.build?0:1)" && {
    "$PM" run build
  }
else
  echo "No package.json detected."
  echo "Run feat-001 (Project Scaffold) first, then re-run ./init.sh."
fi

echo "=== Verification Complete ==="
echo ""
echo "Next steps:"
echo "1. Read feature_list.json to see current feature state"
echo "2. Pick ONE unfinished feature to work on"
echo "3. Create its branch from main: git checkout -b <branch field from feature_list.json>"
echo "4. Implement only that feature"
echo "5. Re-run verification before claiming done"
