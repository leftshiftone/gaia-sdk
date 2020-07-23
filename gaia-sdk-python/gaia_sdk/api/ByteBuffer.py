import struct


class ByteBuffer():

    def __init__(self, buffer: bytearray = bytearray()):
        self.buffer = buffer

    def put(self, obj: bytes):
        self.buffer = self.buffer + obj

    def put_long(self, obj: int):
        self.buffer = self.buffer + struct.pack('>q', obj)

    def has_remaining(self):
        return len(self.buffer) > 0

    def get_long(self):
        bytes = self.buffer[:8]
        self.buffer = self.buffer[8:]
        return struct.unpack('>q', bytes)[0]

    def to_bytes(self):
        return self.buffer
