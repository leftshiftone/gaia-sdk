import os
import shutil
from subprocess import check_call

POETRY_PROJECT_FILE = "pyproject.toml"


def clean():
    shutil.rmtree("dist", ignore_errors=True)
    shutil.rmtree("build", ignore_errors=True)
    shutil.rmtree(".pytest_cache", ignore_errors=True)


def install():
    _execute(["poetry", "install"])


def test():
    _execute(["poetry", "run", "pytest", "--junit-xml=build/test/TEST-junit.xml", "-s"])


def build():
    _execute(["poetry", "build"])


def publish():
    _execute(["poetry", "publish"])


# todo: remove release
#
# def release():
#     scope = sys.argv[1:][0]
#
#     check_call(["git", "pull", "--tags"])
#     check_call(["poetry", "version", scope])
#     check_call(["git", "add", "*.toml"])
#     version = _get_version(True)
#     print(f"Releasing {version}")
#     check_call(["git", "commit", "-m", f"Release {version}"])
#     check_call(["git", "tag", "-a", "-m", f"Release {version}", f"v{version}"])
#
#     _docker_build(True)
#     _docker_publish()
#
#     check_call(["git", "push"])
#     check_call(["git", "push", "--tags"])


def _execute(command, exec_dir=None):
    cmd = command.copy()
    print(f"Executing: {' '.join(cmd)}")
    for e in cmd:
        if e.startswith("$"):
            cmd[cmd.index(e)] = os.getenv(cmd[cmd.index(e)].replace("$", ""))
    check_call(cmd, cwd=exec_dir, env=os.environ)
