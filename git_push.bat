@echo off
set "PATH=C:\Program Files\Git\cmd;%PATH%"
git add -A
git commit -m "Fix: Changed Ph.D. Scholar to Ph.D. (completed)"
git push origin main
