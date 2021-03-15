from typing import Callable


class DataRefRequestConfig:
    def __init__(self, on_upload_progress: Callable[[int], None]):
        self.on_upload_progress = on_upload_progress

    def on_upload_progress(self, progress: int):
        """Return current upload progress"""
        pass


