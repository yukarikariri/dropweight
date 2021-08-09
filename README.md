# README

# usersテーブル
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


# weightsテーブル
| Column             | Type             | Options                        |
| ------------------ | -----------------| ------------------------------ |
| weight             | float(3, 2)      | null: false                    |
| start_time         | datetime         | null; false                    |
| user               | references       | null: false, foreign_key: true |

### Association
- belongs_to :user


# waterテーブル
| Column             | Type           | Options                        |
| ------------------ | -------------- | ------------------------------ |
| water              | float(2, 1)    | null: false                    |
| start_time         | datetime       | null; false                    |
| user               | references     | null: false, foreign_key: true |

### Association
- belongs_to :user


# motionsテーブル
| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| motion             | string     | null: false                    |
| start_time         | datetime   | null; false                    |
| user               | references | null: false, foreign_key: true |

### Association
- belongs_to :user


# trainingテーブル
| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| training           | string     | null: false                    |
| start_time         | datetime   | null; false                    |
| user               | references | null: false, foreign_key: true |

### Association
- belongs_to :user


# my_trainingテーブル
| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| training_name      | string     | null: false                    |
| user               | references | null: false, foreign_key: true |

### Association
- belongs_to :user
- has_many :training_menus


# training_menusテーブル
| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| menu_name          | string     | null: false                    |
| time               | integer    | null: false                    |
| training           | references | null: false, foreign_key: true |

### Association
- belongs_to :training
