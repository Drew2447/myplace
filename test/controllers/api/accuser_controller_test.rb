require "test_helper"

class Api::AccuserControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_accuser_index_url
    assert_response :success
  end

  test "should get update" do
    get api_accuser_update_url
    assert_response :success
  end
end
