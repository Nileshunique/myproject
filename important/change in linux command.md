nilesh@nilesh-HP-EliteBook-8440p:~$ adduser niitn
adduser: Only root may add a user or group to the system.
nilesh@nilesh-HP-EliteBook-8440p:~$ su - 
Password: 

su: Authentication failure
nilesh@nilesh-HP-EliteBook-8440p:~$ 
nilesh@nilesh-HP-EliteBook-8440p:~$ SUDO PASSWORD ROOT
SUDO: command not found
nilesh@nilesh-HP-EliteBook-8440p:~$ sudo password root
[sudo] password for nilesh: 
sudo: password: command not found
nilesh@nilesh-HP-EliteBook-8440p:~$ sudo password root
sudo: password: command not found
nilesh@nilesh-HP-EliteBook-8440p:~$ su password root
No passwd entry for user 'password'
nilesh@nilesh-HP-EliteBook-8440p:~$ su root
Password: 
su: Authentication failure
nilesh@nilesh-HP-EliteBook-8440p:~$ su nilesh
Password: 
nilesh@nilesh-HP-EliteBook-8440p:~$ adduser NItin
adduser: Only root may add a user or group to the system.
nilesh@nilesh-HP-EliteBook-8440p:~$ root

Command 'root' not found, did you mean:

  command 'roo' from snap roo (2.0.3)
  command 'toot' from snap toot (0.25.2)
  command 'rootv' from deb xawtv
  command 'rott' from deb rott
  command 'proot' from deb proot

See 'snap info <snapname>' for additional versions.

nilesh@nilesh-HP-EliteBook-8440p:~$ man root
No manual entry for root
nilesh@nilesh-HP-EliteBook-8440p:~$ sudo passwd root
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
nilesh@nilesh-HP-EliteBook-8440p:~$ adduser nitin
adduser: Only root may add a user or group to the system.
nilesh@nilesh-HP-EliteBook-8440p:~$ su - 
Password: 
root@nilesh-HP-EliteBook-8440p:~# adduser Nitin
adduser: Please enter a username matching the regular expression configured
via the NAME_REGEX[_SYSTEM] configuration variable.  Use the `--force-badname'
option to relax this check or reconfigure NAME_REGEX.
root@nilesh-HP-EliteBook-8440p:~# adduser nitin
Adding user `nitin' ...
Adding new group `nitin' (1001) ...
Adding new user `nitin' (1001) with group `nitin' ...
Creating home directory `/home/nitin' ...
Copying files from `/etc/skel' ...
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
Changing the user information for nitin
Enter the new value, or press ENTER for the default
	Full Name []: Nitin Nimesh
	Room Number []: Nilesh Room
	Work Phone []: nil
	Home Phone []: nil
	Other []: nil
Is the information correct? [Y/n] y
root@nilesh-HP-EliteBook-8440p:~# chage nitin
Changing the aging information for nitin
Enter the new value, or press ENTER for the default

	Minimum Password Age [0]: 0                           
	Maximum Password Age [99999]: 9999999
	Last Password Change (YYYY-MM-DD) [2020-04-21]: 
	Password Expiration Warning [7]: 2
	Password Inactive [-1]: 12
	Account Expiration Date (YYYY-MM-DD) [-1]: 
root@nilesh-HP-EliteBook-8440p:~# 
root@nilesh-HP-EliteBook-8440p:~# 
root@nilesh-HP-EliteBook-8440p:~# chage
Usage: chage [options] LOGIN

Options:
  -d, --lastday LAST_DAY        set date of last password change to LAST_DAY
  -E, --expiredate EXPIRE_DATE  set account expiration date to EXPIRE_DATE
  -h, --help                    display this help message and exit
  -I, --inactive INACTIVE       set password inactive after expiration
                                to INACTIVE
  -l, --list                    show account aging information
  -m, --mindays MIN_DAYS        set minimum number of days before password
                                change to MIN_DAYS
  -M, --maxdays MAX_DAYS        set maximim number of days before password
                                change to MAX_DAYS
  -R, --root CHROOT_DIR         directory to chroot into
  -W, --warndays WARN_DAYS      set expiration warning days to WARN_DAYS

root@nilesh-HP-EliteBook-8440p:~# chage shadow
chage: user 'shadow' does not exist in /etc/passwd
root@nilesh-HP-EliteBook-8440p:~# man shadow
root@nilesh-HP-EliteBook-8440p:~# man pwck
	root@nilesh-HP-EliteBook-8440p:~# man passwd
root@nilesh-HP-EliteBook-8440p:~# passwd nitin
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
root@nilesh-HP-EliteBook-8440p:~# passwd -d nitin
passwd: password expiry information changed.
root@nilesh-HP-EliteBook-8440p:~# passwd nitin
Enter new UNIX password: 
Retype new UNIX password: 
Sorry, passwords do not match
passwd: Authentication token manipulation error
passwd: password unchanged
root@nilesh-HP-EliteBook-8440p:~# chage nitin
Changing the aging information for nitin
Enter the new value, or press ENTER for the default

	Minimum Password Age [0]: 
	Maximum Password Age [9999999]: 
	Last Password Change (YYYY-MM-DD) [2020-04-21]: 
	Password Expiration Warning [2]: 
	Password Inactive [12]: 
	Account Expiration Date (YYYY-MM-DD) [-1]: 
root@nilesh-HP-EliteBook-8440p:~# 
root@nilesh-HP-EliteBook-8440p:~# passwd -len nitin
passwd: invalid numeric argument 'nitin'
Usage: passwd [options] [LOGIN]

Options:
  -a, --all                     report password status on all accounts
  -d, --delete                  delete the password for the named account
  -e, --expire                  force expire the password for the named account
  -h, --help                    display this help message and exit
  -k, --keep-tokens             change password only if expired
  -i, --inactive INACTIVE       set password inactive after expiration
                                to INACTIVE
  -l, --lock                    lock the password of the named account
  -n, --mindays MIN_DAYS        set minimum number of days before password
                                change to MIN_DAYS
  -q, --quiet                   quiet mode
  -r, --repository REPOSITORY   change password in REPOSITORY repository
  -R, --root CHROOT_DIR         directory to chroot into
  -S, --status                  report password status on the named account
  -u, --unlock                  unlock the password of the named account
  -w, --warndays WARN_DAYS      set expiration warning days to WARN_DAYS
  -x, --maxdays MAX_DAYS        set maximum number of days before password
                                change to MAX_DAYS

root@nilesh-HP-EliteBook-8440p:~# passwd -r nitin
passwd: repository nitin not supported
root@nilesh-HP-EliteBook-8440p:~# 

