### <font color=#db1111>github相关</font>

	1. github下载仓库的历史版本：
		a. 查看全部commit历史
		b. 切换到制定版本：
		c. 可下载当前版本
	2. git提交记录绑定到github issue记录：
		a. github 新建 issue并分配给指定开发者
		b. 本地提交：git commit -m "fix #issueId [by author名字]：提示内容"
			i. fix：修复指定bug 
			ii. resolves: 解决了某个任务  
			iii. close: 关闭issue
		c. 可以看到github相应的issue被完成并关闭
	3. github复刻其他仓库项目到自己的github： 
		a. fork项目
		b. 拉去fork后的项目到本地： git clone xx
		c. 添加fork的项目原址（保持代码同步）： git remote  add upstream xxx
		d. 拉去上游分支：git fetch upstream
		e. fork后的项目修改，保持跟原地址同步： 
			i. 本地提交： commit
			ii. 拉去远程： git pull / git pull rebase(本地处理可能的冲突)
			iii. 推送到服务器：git push

### <font color=#db1111>配置相关</font>
	1. Git 版本升级
		版本 > 2.16.1 则使用： git update-git-for-windows
		版本 2.14.2-2.16.1 则使用： git update
		版本 <2.14.2 请重新下载安装覆盖
	2. 用户名、密码：
		a. 设置
      git config --global user.name  "username"  
      git config --global user.email  "email"
      global是全局的git配置,  local是局部本地文件夹设置  设置是局部可以不加local
		b. 查询的时候去除后面具体值即可。查询的时候局部一定要加local
	3. 获取git目录下的全部用户名密码：
		> 
		> git config --get-all user.email
	4. 退出git log：字母Q
	5. 退出vim：Esc退出编辑状态，ZZ退出
	6. 默认大小写不敏感设置关闭：git config core.ignorecase false
	7. 提交备注内容多行提交：
		a. git commit  -m -m 多行message提交
		b. Git Bash: git commit -m ' Enter 多行提交
	8. 生成SSH RSA密钥： git bash打开 ssh-keygen -t rsa -C "xxxxx@xxxxx.com"
	
### <font color=#db1111>查看信息相关</font>
	1. 查看当前项目的git状态：git status  包含信息
	2. 查看git的操作历史记录：git reflog
	3. 查看git某次提交修改的文件：git log -<最近N次> --stat  例：git log -1 --stat
	4. 查看某次提交修改的内容：git show <commitID>
	
### <font color=#db1111>基础命令</font>
	1. 初始拉取远程代码：git clone xxx.git
	2. 提交代码到服务器：git push
	3. 拉取服务器的代码，不与本地代码合并：git fetch [<分支名称>]  无分支名称默认master
	4. 拉取服务器的代码并与本地代码合并：git pull
		1. git pull  = git fetch  git merge
	5. 查看单个文件的历史提交记录和区别： git log -p filename
	6. 查看项目的历史提交记录：git log
	7. 提交文件变更：git add 
		1. 提交指定文件到暂存区：git add xx
		2. 一次性提交所有改变的文件： git add -A . 
		3. 添加所有内容：git add -A
		4. 添加新文件和编辑过的文件不包括删除的文件： git add .
		5. 添加编辑或者删除的文件，不包括新添加的文件：git add -u 
	8. 基础提交流程：
		1. 提交当前全部修改文件到staged changes：git add .
		2. 提交stages changes的文件到仓库：git commit -m "提示内容"   （单引号会报错）
		3. 拉取远程文件到本地仓库：git pull / git fetch + git merge(推荐，可以查看变化)
		4. 推送本地代码到远程仓库：git push
	9. 本地已存在项目绑定远程仓库：
		1. git init
		2. git remote add origin xxxx.git  
			这里的 origin是绑定的远程仓库的命名； 添加多个远程地址时，只要修改origin 和 远程地址就好
			绑定多个远程地址后，git pull origin 代表拉取远程地址origin的代码，push同理。
			如： 新增 git remote add mex xxxx.git， 拉取： git pull mex /  git push mex   
		3. git add .
		4. git commit
		5. git pull 
		6. git push
	 > 推送代码到指定远程地址的：git pull [远程地址名称] [远程地址分支]
		1. 若提示无法拉取不相关的历史：git pull origin master --allow-unrelated-histories
		2. 若出现冲突处理即可
		3. 推送存在多个分支： git push [远程地址名称]

### <font color=#db1111>撤销恢复</font>
	1. 修改最后一次commit的message:  git commit --amend -m "c3"
	2. 修改最近一次的commit且本地已存在修改：
	场景：提交了commit 发现功能错误，但是本地已经修改了部分代码，可采取操作：（本地存在已修改，直接reset的git会提示错误（原因猜测：回滚的代码跟本地修改存在冲突））
		1. 提交修改到暂存：git add .
		2. 修改commit提交，会进入到vim面板：git commit --amend
		3. 需要修改提交备注：键盘快捷键 I 输入修改文本 > ESC退出编辑  >  ZZ退出vim
		4. 不需要修改提交的备注：ZZ退出vim
	这样只会存在一次commit
	3. 修改历史提交的某次commit信息：
		变基到指定要修改的某次提交：git rebase -i HEAD~2
		1. 进入到编辑页面：键盘快捷键 I 输入修改文本 
		2. 把Pick 改成edit / reword 根据需求(底部有提示) 修改内容
		3. ESC退出编辑  >  ZZ退出vim
		4. 继续根据git的提示操作
	4. 将数据恢复到指定commit版本：git reset --hard 【commitID】
	5. 恢复已执行reset --hard撤销的commit版本：
		1. 获取撤销的commit ID：git reflog
		2. 恢复撤销：git reset --hard 【commitID】
	6. 数据恢复/撤销最近一次操作：git reset HEAD~
		1. 未上传远程commit数据恢复：
			i. 撤销commit提交-保留你的改动：
				1) 恢复到add前：git reset HEAD~
				2) 恢复到add后 commit前：git reset --soft HEAD~
			ii. 撤销commit提交-保留你的改动（改动保留在staged状态(已add)）：
			iii. 撤销commit提交-不保留你的改动：git reset --hard HEAD~
	7. 找回add 但未commit丢失的文件：
		1. 找回丢失的文件，并生成到git目录下：git fsck --lost-found
		2. 查看对应文件的内容：git show [HashID]
		3. 恢复：把对应Hash文件名修改成原文的文件名，并复制回项目
		(业务场景：【牢记，commit很重要】
			1. git add .  提交了主分支代码到缓存区
			2. git checkout -b newBrach 新建分区
			3. git reset --hard [CommitId] 把指针指向某次提交记录
			4. git add 提交在缓存区的代码丢失
		)
			
### <font color=#db1111>本地分支相关</font>
	1. 建一个分支并同时切换到那个分支上：git checkout -b <新分支名称>      (-b代表branch)
	2. 切换到origin/zhanghanlun分支，并在本地新建分支zhanghanlun：git checkout -b zhanghanlun origin/zhanghanlun
	3. 新建分支： git branch <分支名称>
	4. 切换分支时本地存在正在修改中的文件：（一定要提交暂存，否则切换分支会把修改的文件带到主分支造成代码污染）
		1. 提交到暂存区：git add .
		2. 提交暂存区隐藏：git stash  / git stash save "test" 【提交暂时时指定暂存名字】 
		Tips：git stash是针对整个git工程来进行保存的,也就是说区分不了 branch， 因此所有分支的stash list的内容在所有分支都可查看到
		3. 查看隐藏列表： git stash list
		4. 恢复指定某次的暂存隐藏并删除：git stash pop [stash{id}]
	5. 暂存相关：
		1. 删除暂存：git stash drop id
		2. 清除暂存：git stash clear
		3. 恢复最新的：git stash pop --index
	6. A 分支切换到 B 分支时存在修改的未暂存的代码：（B分支代码干净）
		1. 切换回A分支，暂存代码
		2. 切换到 B 分支
	7. 查看全部分支(本地 + 远程)： git branch -a
	8. 查看远程分支：git branch -r
	9. 查看本地分支和远程分支的关系：git branch 
	10. 查看本地分支： git branch    带 * 号为当前所处分支
	11. 拉取远程指定git提交的指定版本：
		1. 查看提交记录： git log
		2. 新建分支并拉取对应版本：git branch <分支名称> <commitID>  例：git branch newBranch 9a891305807db590af4c63e809b5fef600d922ce
		3. 切换分支：git checkout <分支名称>
		4. 查看本地所处分支：git branch、
	12. 修改分支名称：
		1. 切换到需要修改的分支下：git checkout <分支名称>
		2. 修改名称： git brand -m <新的分支名称>
	13. 合并分支到主分支：
		1. 切换回主分支：git checkout master
		2. 合并分支：git merge <需合并的分支名称>
		3. 如果认为分支使命结束，可删除分支
	14. 合并冲突：合并分支时，两个分支修改了相同文件，则会冲突使合并暂停：
		1. git status查看冲突文件
		2. 手动处理冲突内容
		3. git add提交修改的冲突文件
		4. git status来确认所有的合并冲突都已被解决
		5. 如果没问题，git commit
		6. 再次执行合并：git merge <需合并的分支名称>
	15. 删除分支：git branch -d <分支名称>
	16. 查看当前指向分支：git symbolic-ref HEAD

### <font color=#db1111>本地操作远程相关</font>
	1. 删除远程分支‘serverfix’：git push origin --delete serverfix
	2. 拉取远程指定分支信息并合并到本地：git pull origin <远程分支名>
	3. 本地分支代码推送远程指定分支，若分支不存在，会新建远程分支名：git push origin <本地分支名>:<远程分支名>
	4. 远程已删除分支还存在在本地分支：
		1. 方法一：（操作多）
			i. 查看本地所有分支：git branch -a  (本地拉取得远程已删除的历史分支也会存在)
			ii. 查看远程仓库所有分支：git remote show origin （显示的列表后显示tracked说明远程分支还在，显示stale说明已移除，可删除）
			iii. 删除本地存在远程已经删除的分支：git remote prune origin 完美
		2. 方法二：快速删除本地未与远程关联的多余分支：git fetch -p 
	5. 本地新建分支并关联远程分支的代码提交整体操作：
		方法一 (第一次麻烦,后续提交只需要git pull 和push 就好)
			i. 本地新建并切换分支：git checkout -b <本地新分支名>
			ii. 本地开发 -> 代码commit
			iii. 为当前本地分支设置远程跟踪信息：git branch --set-upstream-to=origin/<远程分支名> <本地分支名>
			iv. 拉取远程最新代码：git pull
			v. 提交代码到远程: git push

### <font color=#db1111>远程仓库相关</font>
	1. 远程仓库拉取代码：git pull
	2. 本地代码推送到远程仓库： git push
	3. 克隆远程仓库代码本地文件夹：git clone xxx.git
	4. 本地git仓库绑定远程仓库地址：git remote add [仓库在本地的名字] xxx.git
	5. 拉去远程仓库指定文件夹的代码：（要求第一次拉取时设置，已经拉去过以后再设置无效 -- 待进一步认证）：
		1. 初始化本地仓库：git init
		2. 开启指定文件复制权限：git config core.sparsecheckout true
		3. 指定要复制的文件：echo privilege/* >> .git\info\sparse-checkout
		4. 新增远程仓库： git remote add origin xxx.git
		5. 拉取远程指定文件夹代码：git pull origin master

### <font color=#db1111>Tag标记(标记版本信息) - 标记了一个锚点，不受新的提交影响，可像分支一样切换</font>
	1. tag：对上一次的commit内容进行标记
	2. 新增tag：git tag <tagName> ， 给历史commit添加tag: git tag tagName commitId
	3. 切换到制定tag: git checkout tagName
	4. 本地的tag修改不会在push的时候同步的服务器，需要显示push：git push --tags
	5. 本地tag移除：git tag -d tagName
	6. 远程tag移除：git push origin :refs/tags/<tagName>
	7. 给tag增加备注信息：git tag -a tagName -m "备注内容"
	8. 查看指定的tag的修改内容：git show tagName


### <font color=#db1111>指针移动（checkout学习记录）</font>
	1. 移动HEAD到指定提交记录：git checkout commitID
	2. 相对操作符：^上一次
	3. 指定分支上移动：git checkout HEAD^ 当前指针前移1次 / git checkout HEAD~
	4. 指定分支上移动到N次前：git checkout HEAD~3 当前指针前移3次
	5. 强制修改 main 分支指向当前 HEAD 指针所在位置：git branch -f main    -f 选项让分支指向另一个提交
	6. 把其他分支的特定提交记录提交到主分支：git cherry-pick c3 c4 c7     c3 c4 c7  3条commit记录按顺序合并到主分支
