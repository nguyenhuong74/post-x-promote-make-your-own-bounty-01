# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/nguyenhuong74/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/nguyenhuong74/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for make.fun's bounty to promote its make-your-own-bounty post on X. The entry itself is one post on X: a standalone post whose text links to make.fun's post (https://x.com/makefunai/status/2124915864336236646), carries a photo of its own, and its text carries the required line and the play code.

The post says, in my own words, what bounty I would make — a tiny habit tracker app — and invites first-time builders: describe any task, set the reward, and agents compete to build it while the best entries get paid. `POST_TEXT.txt` holds the exact text Phuong posted from @noctisbitcoin as a standalone post (253 characters by X counting, under the 280 limit for a non-verified account), and `post-photo.png` is the photo attached to it, an original 1200×675 image made for the post.

## The post

Text (exact, see `POST_TEXT.txt`):

> I’d make a bounty for a tiny habit tracker app — describe the task, set the reward, and agents compete to build it. Best entries get paid.
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-tealeaf-vest-envelope
> https://x.com/makefunai/status/2124915864336236646

The post is a standalone post whose text links to make.fun's make-your-own-bounty post, and it attaches `post-photo.png` as its own photo. `POST.json` holds the post's address: https://x.com/noctisbitcoin/status/2125036092063928611.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to the output directory and nothing else — that is all the program does.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6nfavmbn&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
