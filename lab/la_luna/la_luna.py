#!/usr/bin/env python

############################################
# La luna Ver 0.01                         #
#                           2023/06/12(Mon)#
############################################

import math
import datetime

# バージョン情報
Ver = "Ver 0.01"

# 日付表示
now = datetime.datetime.now()
yyyy = now.strftime("%Y")
mmdd = now.strftime("%m/%d")
youbi = now.strftime("(%a)")
hhmm = now.strftime("%H:%M")

#********** メイン **********

# 現在のユリウス通日を計算する関数
def JulianNow():
    return datetime.datetime.now().timestamp() / 86400 + 2440587.5

# 引数の値を超えない整数を求める関数
def xint(value):
    return int(value) if value >= 0 else int(value) - 1

# 現在のユリウス通日
jd0 = JulianNow()

# 直前の新月のユリウス通日を計算する
k = xint((jd0 - 2451550.09765) / 29.530589)
t = k / 1236.85
nmoon = 2451550.09765 + 29.530589 * k + 0.0001337 * t * t - 0.40720 * math.sin(math.radians(201.5643 + 385.8169 * k)) + 0.17241 * math.sin(math.radians(2.5534 + 29.1054 * k))

# 月齢を計算し、小数点1桁まで丸める
luna = round(jd0 - nmoon, 1)
lDays = int(luna)

if lDays == 0:
    lStates = "新月"
elif lDays == 7 or lDays == 8:
    lStates = "上弦の月"
elif lDays == 15:
    lStates = "満月"
elif lDays == 22 or lDays == 23:
    lStates = "下弦の月"
else:
    # lStates = "&nbsp;"
    lStates = ""

# 日付、現在時刻、月齢を表示する
print(f"{yyyy}/{mmdd}")
print(f"{hhmm} 現在")
print(f"{lStates}")
print(f"月齢 {luna}日")
