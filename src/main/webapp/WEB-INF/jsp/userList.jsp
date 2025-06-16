<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>用户管理系统</title>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            margin: 4px 2px;
            cursor: pointer;
        }
        .delete-btn {
            background-color: #f44336;
        }
    </style>
</head>
<body>
    <h2>用户管理系统</h2>
    
    <!-- 添加用户表单 -->
    <div>
        <h3>添加新用户</h3>
        <form id="addUserForm">
            用户名：<input type="text" id="username" required><br><br>
            邮箱：<input type="email" id="email" required><br><br>
            <button type="submit" class="button">添加用户</button>
        </form>
    </div>

    <hr>

    <!-- 用户列表 -->
    <h3>用户列表</h3>
    <table id="userTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>用户名</th>
                <th>邮箱</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <!-- 编辑用户模态框 -->
    <div id="editModal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ddd;">
        <h3>编辑用户</h3>
        <form id="editUserForm">
            <input type="hidden" id="editId">
            用户名：<input type="text" id="editUsername" required><br><br>
            邮箱：<input type="email" id="editEmail" required><br><br>
            <button type="submit" class="button">保存</button>
            <button type="button" class="button delete-btn" onclick="closeEditModal()">取消</button>
        </form>
    </div>

    <script>
        // 加载用户列表
        function loadUsers() {
            $.get("/api/users", function(users) {
                let tbody = $("#userTable tbody");
                tbody.empty();
                users.forEach(function(user) {
                    tbody.append(`
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>${user.email}</td>
                            <td>
                                <button class="button" onclick="showEditModal(${user.id}, '${user.username}', '${user.email}')">编辑</button>
                                <button class="button delete-btn" onclick="deleteUser(${user.id})">删除</button>
                            </td>
                        </tr>
                    `);
                });
            });
        }

        // 添加用户
        $("#addUserForm").submit(function(e) {
            e.preventDefault();
            let user = {
                username: $("#username").val(),
                email: $("#email").val()
            };

            $.ajax({
                url: "/api/users",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(user),
                success: function(result) {
                    if(result) {
                        alert("用户添加成功！");
                        $("#addUserForm")[0].reset();
                        loadUsers();
                    } else {
                        alert("用户添加失败！");
                    }
                }
            });
        });

        // 显示编辑模态框
        function showEditModal(id, username, email) {
            $("#editId").val(id);
            $("#editUsername").val(username);
            $("#editEmail").val(email);
            $("#editModal").show();
        }

        // 关闭编辑模态框
        function closeEditModal() {
            $("#editModal").hide();
        }

        // 编辑用户
        $("#editUserForm").submit(function(e) {
            e.preventDefault();
            let id = $("#editId").val();
            let user = {
                username: $("#editUsername").val(),
                email: $("#editEmail").val()
            };

            $.ajax({
                url: `/api/users/${id}`,
                type: "PUT",
                contentType: "application/json",
                data: JSON.stringify(user),
                success: function(result) {
                    if(result) {
                        alert("用户更新成功！");
                        closeEditModal();
                        loadUsers();
                    } else {
                        alert("用户更新失败！");
                    }
                }
            });
        });

        // 删除用户
        function deleteUser(id) {
            if(confirm("确定要删除这个用户吗？")) {
                $.ajax({
                    url: `/api/users/${id}`,
                    type: "DELETE",
                    success: function(result) {
                        if(result) {
                            alert("用户删除成功！");
                            loadUsers();
                        } else {
                            alert("用户删除失败！");
                        }
                    }
                });
            }
        }

        // 页面加载时获取用户列表
        $(document).ready(function() {
            loadUsers();
        });
    </script>
</body>
</html>