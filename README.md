# README

# アプリケーション名：DropWeight

# アプリケーション概要
・ダイエットを目的としたヘルスケアアプリ  
・ユーザー登録、ログインすることでユーザーは全機能を使用できる
・

# URL

# テスト用アカウント
Eメール：test1@test.jp  
パスワード：111111

# 制作背景（意図）
「ダイエットで大事なこと」と聞いて、皆さんはどのようなことを思い浮かべられますでしょうか？

  1. 食べ過ぎない・食べる量を減らす  
  2. 運動  

を思い浮かべられる方が多いのではないでしょうか？

もちろんその2点もとても大事なのですが、意外に見過ごされていて大切だと感じているのが次の3点です。  

  3. 日々の体重管理  
    →ダイエットがうまくいっているという感覚を持ってモチベーションを保つこと、  
       反対に、食べ過ぎて最近太ってきたという危機感を持つことに繋がります。  
    → また、運動も食事も頑張ってるけど、体重が減らない、というタイミングもあると思うので、  
      そういった体のリズムを把握するためにも、日々の体重管理は重要です。  
  4. 1日の最低摂取水分量を把握する  
    → 1日で2.0Lは水を飲んだ方がいい、とお聞きになったことがある方もいらっしゃると思います。  
      諸説ありますが、これは自分の体重x40mlの水分は最低とったほうがいいという話からきている通説です。  
      運動を激しくされている方はもっと飲んだ方がいいとされていますし、  
      ダイエット中であれば空腹を紛らわすために、もっと飲むこともあるかと思います。  
      でも皆さん、実際自分がどれぐらいの水を毎日飲んでいるかしっかり把握されている方って  
      どれぐらいいらっしゃいますか？  
      気がついたら、500mlのペットボトルも余ってるみたいな日ありませんか？  
  5. 摂取水分量も関係してくるのが、定期的なお通じ習慣です。  
    → 女性では悩まれている方多いのではないかと思っています。  
      定期的なお通じの習慣は、ダイエットにはかなり影響があって、お水をきちんと飲めていないときは不安定になりがちです。

食事制限も運動も頑張っているのに、なかなか効果が現れないという方は、  
もしかしたら体質や習慣が原因の可能性もあります。
自分の体質や体調のリズムを観察しながら、長く健康的にダイエットをがんばって頂きたいという思いから  
このアプリケーションを制作致しました。

# 目指した課題解決  
  * 『体重管理 ＋ 1日に飲んだお水の量 ＋ お通じ有無』を纏めて記録し、管理すること
  * 体重、水分量、お通じ有無の記録をグラフやカレンダーで可視化し、自分の体調の変化や現状を把握しやすくすること

# 利用方法
1. 新規ユーザー登録するか、上記テスト用アカウントでログインしてください。
2. マイページに遷移すると、以下4データを登録することができます。
    * 体重
    * 摂取水分量
    * お通じ有無
    * 運動有無
3. 2で登録したデータはマイページの各グラフ、またはマンスリーカレンダーに即時反映されます。  
    * 体重（折線グラフ）
    * 摂取水分量（棒グラフ）
    * お通じ有無（マンスリーカレンダー）
    * 運動有無（マンスリーカレンダー）

# アプリイメージ
### 【トップページ】
[![Image from Gyazo](https://i.gyazo.com/2394fe023b3bf9bc601c915c1e4281f8.jpg)](https://gyazo.com/2394fe023b3bf9bc601c915c1e4281f8)
### 【マイページ】
[![Image from Gyazo](https://i.gyazo.com/9952a3bb5e86d3b2e36567c8cc490c69.png)](https://gyazo.com/9952a3bb5e86d3b2e36567c8cc490c69)

# 追加実装予定
* オリジナルトレーニングメニューやその時間（タイマー）を登録できる機能
* 登録したオリジナルトレーニングメニューのカウントダウンタイマーを表示する機能
* 摂取カロリーを登録、マイページにグラフ表示する機能

# データベース
## usersテーブル
| Column             | Type             | Options                        |
| ------------------ | ---------------- | ------------------------------ |
| nickname           | string           | null: false                    |
| email              | string           | null: false, unique: true      |
| encrypted_password | string           | null: false                    |
| target_weight      | float(4, 1)      | null: false                    |
| target_water       | float(3, 2)      | null: false, unsigned          |

### Association
- has_many :weights
- has_many :water
- has_many :motions


## weightsテーブル
| Column             | Type             | Options                        |
| ------------------ | -----------------| ------------------------------ |
| weight             | float(3, 2)      | null: false                    |
| start_time         | datetime         | null; false                    |
| user               | references       | null: false, foreign_key: true |

### Association
- belongs_to :user


## waterテーブル
| Column             | Type           | Options                        |
| ------------------ | -------------- | ------------------------------ |
| water              | float(2, 1)    | null: false                    |
| start_time         | datetime       | null; false                    |
| user               | references     | null: false, foreign_key: true |

### Association
- belongs_to :user


## motionsテーブル
| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| motion             | string     | null: false                    |
| start_time         | datetime   | null; false                    |
| user               | references | null: false, foreign_key: true |

### Association
- belongs_to :user


## trainingテーブル
| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| training           | string     | null: false                    |
| start_time         | datetime   | null; false                    |
| user               | references | null: false, foreign_key: true |

### Association
- belongs_to :user

## my_trainingテーブル
| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| training_name      | string     | null: false                    |
| user               | references | null: false, foreign_key: true |

### Association
- belongs_to :user
- has_many :training_menus


## training_menusテーブル
| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| menu_name          | string     | null: false                    |
| time               | integer    | null: false                    |
| training           | references | null: false, foreign_key: true |

### Association
- belongs_to :training

# 画像引用元（トップページ、マイページ）
* https://unsplash.com/
* https://icooon-mono.com/  

※ いずれも引用、商用利用OK／クレジット表記不要

# 開発環境
* ruby 2.6.5p114
* Rails 6.0.4
* MySQL 5.6.51 