#!/bin/bash

# 停止并删除旧容器
docker-compose down

# 构建新镜像
docker-compose build

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f 